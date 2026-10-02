import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './Section';
import { profile } from '@/data/profile';

const isPlaceholder = (v: string) =>
  v.includes('_URL') || v.includes('EMAIL');

export function Contact() {
  const links = [
   {
  label: 'Email',
  value: profile.email,
  href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
  icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: profile.linkedin,
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: profile.github,
      href: profile.github,
      icon: Github,
    },
  ];

  return (
    <Section id="contact" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-14 sm:px-14 sm:py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-ink-300 text-base sm:text-lg leading-relaxed">
              I&apos;m always interested in opportunities where I can learn, contribute, and work
              on technology that solves real problems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {links.map(({ label, value, href, icon: Icon }) => {
                const placeholder = isPlaceholder(value);
                return (
                  <a
                    key={label}
                    href={placeholder ? undefined : href}
                    target={placeholder ? undefined : '_blank'}
                    rel={placeholder ? undefined : 'noopener noreferrer'}
                    title={
                      placeholder
                        ? `Replace ${label} in src/data/profile.ts`
                        : label
                    }
                    className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all w-full sm:w-auto justify-center"
                  >
                    <Icon size={18} className="text-accent-400" />
                    {label}
                    <ArrowRight
                      size={15}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
