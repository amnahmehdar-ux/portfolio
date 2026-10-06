import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/profile';
import { useLanguage } from '../context/LanguageContext';

// ترجمة مسميات الروابط حسب الـ id
const linkLabels: Record<string, { en: string; ar: string }> = {
  about: { en: 'About', ar: 'نبذة عني' },
  experience: { en: 'Experience', ar: 'الخبرات' },
  projects: { en: 'Projects', ar: 'المشاريع' },
  skills: { en: 'Skills', ar: 'المهارات' },
  education: { en: 'Education', ar: 'التعليم' },
  contact: { en: 'Contact', ar: 'تواصل معي' },
};

export function Navbar() {
  const { lang, toggleLanguage, isAr } = useLanguage();
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
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EADBCE] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between h-20 sm:h-24 transition-all">
        {/* اليسار: النجمة واللوقو الثاني */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-1.5 group py-1"
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Star"
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
         <img
            src="/logo1.png"
            alt="Amnah"
            className="h-16 sm:h-40 w-auto object-contain transition-transform duration-300 group-hover:opacity-95"
        />
        </button>

        {/* المنتصف: روابط القائمة في المنتصف تماماً */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                active === link.id
                  ? 'text-[#C59B27]'
                  : 'text-[#5A434D] hover:text-[#3D1420]'
              }`}
            >
              {linkLabels[link.id] ? linkLabels[link.id][lang] : link.label}
              {active === link.id && (
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-[#C59B27]" />
              )}
            </button>
          ))}
        </div>

        {/* اليمين: زر تبديل اللغة + زر التواصل */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-[#C59B27]/40 text-[#5A434D] hover:bg-[#EADBCE]/40 transition-colors shadow-2xs"
            aria-label="Toggle language"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => go('contact')}
            className="inline-flex items-center rounded-lg bg-[#3D1420] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2B0B15] transition-colors shadow-sm"
          >
            {isAr ? 'تواصل معي' : "Let's Connect"}
          </button>
        </div>

        {/* زر الموبايل */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[#C59B27]/40 text-[#5A434D] hover:bg-[#EADBCE]/40 transition-colors"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>
          <button
            className="p-2 -mr-2 text-[#3D1420]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADBCE] ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`text-start py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                active === link.id
                  ? 'text-[#C59B27] bg-[#C59B27]/10'
                  : 'text-[#5A434D] hover:bg-[#EADBCE]/40'
              }`}
            >
              {linkLabels[link.id] ? linkLabels[link.id][lang] : link.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="mt-2 text-center py-2.5 rounded-lg text-sm font-medium bg-[#3D1420] text-white"
          >
            {isAr ? 'تواصل معي' : "Let's Connect"}
          </button>
        </div>
      </div>
    </header>
  );
}