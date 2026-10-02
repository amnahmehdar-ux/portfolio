import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/profile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      let current = 'home';
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/85 backdrop-blur-md border-b border-ink-200/70 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20 transition-all">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-accent-400 font-display font-bold text-lg group-hover:scale-105 transition-transform">
            A
          </span>
          <span
            className={`font-display font-semibold tracking-tight transition-all ${
              scrolled ? 'text-ink-900 text-base' : 'text-ink-900 text-lg'
            }`}
          >
            {profile.shortName}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                active === link.id
                  ? 'text-accent-700'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent-500" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => go('contact')}
          className="hidden md:inline-flex items-center rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
        >
          Let&apos;s Connect
        </button>

        <button
          className="md:hidden p-2 -mr-2 text-ink-800"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-ink-50/95 backdrop-blur-md border-b border-ink-200 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-3 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`text-left py-3 px-2 rounded-lg text-base font-medium transition-colors ${
                active === link.id
                  ? 'text-accent-700 bg-accent-50'
                  : 'text-ink-700 hover:bg-ink-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
