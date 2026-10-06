import { Sparkles } from 'lucide-react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { isAr } = useLanguage();

  return (
    <Section id="projects" className="py-24 sm:py-32 bg-[#FAF8F5]/50 relative overflow-hidden border-y border-[#EADBCE]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45rem] w-[45rem] rounded-full bg-accent-100/30 blur-3xl"
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        
        {/* Header بتصميم متوازن */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/30 bg-white/80 backdrop-blur px-3.5 py-1 text-xs font-semibold text-[#C59B27] shadow-2xs">
            <Sparkles size={13} />
            <span>{isAr ? 'معرض الأعمال' : 'Portfolio Showcase'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight leading-[1.3]">
            {isAr ? (
              <>
                نماذج من{' '}
                <span className="bg-gradient-to-r from-[#C59B27] to-[#8C6D1B] bg-clip-text text-transparent">
                  أعمالي ومشاريعي
                </span>
              </>
            ) : (
              <>
                Featured{' '}
                <span className="bg-gradient-to-r from-[#C59B27] to-[#8C6D1B] bg-clip-text text-transparent">
                  Projects & Systems
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'مشاريع تطبيقية تركّز على حلول الذكاء الاصطناعي، الرؤية الحاسوبية، النماذج اللغوية، وهندسة البرمجيات.'
              : 'Hands-on engineering across AI / computer vision, LLMs & RAG pipelines, and full-stack software development.'}
          </p>
        </div>

        {/* عرض جميع المشاريع بنفس الحجم في شبكة من عمودين */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

      </div>
    </Section>
  );
}