import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './Section';
import { profile } from '@/data/profile';
import { useLanguage } from '../context/LanguageContext';

const isPlaceholder = (v: string) =>
  !v || v.includes('_URL') || v.includes('EMAIL');

export function Contact() {
  const { isAr } = useLanguage();

  const links = [
    {
      enLabel: 'Email',
      arLabel: 'البريد الإلكتروني',
      value: profile.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
      icon: Mail,
    },
    {
      enLabel: 'LinkedIn',
      arLabel: 'لينكد إن',
      value: profile.linkedin,
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      enLabel: 'GitHub',
      arLabel: 'قيت هب',
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
           <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-snug">
  {isAr ? 'ودّك نبدأ فكرة جديدة سوا؟' : "Let's Build Something Meaningful"}
</h2>

<p className="mt-5 max-w-xl mx-auto text-ink-300 text-base sm:text-lg leading-relaxed">
  {isAr
    ? 'سواء عندك فكرة مشروع تقني، فرصة تعاون ملهمة، أو حاب ندردش في الذكاء الاصطناعي.. يسعدني دايم التواصل معك!'
    : "I'm always interested in opportunities where I can learn, contribute, and work on technology that solves real problems."}
</p>
           

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {links.map(({ enLabel, arLabel, value, href, icon: Icon }) => {
                const placeholder = isPlaceholder(value);
                const currentLabel = isAr ? arLabel : enLabel;

                return (
                  <a
                    key={enLabel}
                    href={placeholder ? undefined : href}
                    target={placeholder ? undefined : '_blank'}
                    rel={placeholder ? undefined : 'noopener noreferrer'}
                    title={
                      placeholder
                        ? `Replace ${enLabel} in src/data/profile.ts`
                        : currentLabel
                    }
                    className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all w-full sm:w-auto justify-center"
                  >
                    <Icon size={18} className="text-[#C59B27]" />
                    <span>{currentLabel}</span>
                    <ArrowRight
                      size={15}
                      className={`opacity-0 group-hover:opacity-100 transition-all ${
                        isAr
                          ? 'rotate-180 group-hover:-translate-x-0.5'
                          : 'group-hover:translate-x-0.5'
                      }`}
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