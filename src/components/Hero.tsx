import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

function socialHref(type: 'linkedin' | 'github' | 'email') {
  if (type === 'email') return `mailto:${profile.email}`;
  return profile[type];
}

// 1. تعديل دالة التحقق لتكون أدق
const isPlaceholder = (v: string) => !v || v.includes('_URL') || v.includes('YOUR_EMAIL');



export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-grid"
    >
      {/* ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[36rem] w-[36rem] rounded-full bg-accent-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-accent-100/50 blur-3xl"
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-ink-600 shadow-soft">
            <Sparkles size={14} className="text-accent-500" />
            IT Graduate · AI & Data · KAU 2026
          </div>

          <h1
            className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 leading-[1.05] animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            Information Technology
            <br />
            Graduate
            <span className="block text-ink-500 font-semibold text-2xl sm:text-4xl lg:text-5xl mt-3">
              Building Intelligent &amp; Meaningful Technology
            </span>
          </h1>

          <p
            className="mt-7 max-w-2xl text-base sm:text-lg text-ink-600 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            {profile.summary}
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-ink-800 hover:shadow-lift transition-all"
            >
              View My Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-300 bg-white/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-ink-800 hover:border-ink-400 hover:bg-white transition-all"
            >
              Let&apos;s Connect
            </button>
          </div>

          <div
            className="mt-9 flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            {(
              [
                { type: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
                { type: 'github', icon: Github, label: 'GitHub' },
                { type: 'email', icon: Mail, label: 'Email' },
              ] as const
            ).map(({ type, icon: Icon, label }) => {
              const href = socialHref(type);
              const placeholder = isPlaceholder(href);
              return (
                <a
  key={type}
  href={placeholder ? undefined : href}
  target={type === 'email' ? undefined : '_blank'}
  rel={type === 'email' ? undefined : 'noopener noreferrer'}
  aria-label={label}
  title={placeholder ? `Replace ${label} link in src/data/profile.ts` : label}
  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-600 hover:text-accent-600 hover:border-accent-300 hover:shadow-soft transition-all"
>
  <Icon size={18} />
</a>
              );
            })}
            <span className="ml-1 text-sm text-ink-400">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
