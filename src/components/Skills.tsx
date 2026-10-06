import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { skillGroups } from '@/data/skills';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Code2,
  Globe,
  Database,
  Cpu,
  Wrench,
};

const levelStyles: Record<string, string> = {
  core: 'border-[#C59B27]/40 bg-[#FAF8F5] text-[#8C6D1B]',
  working: 'border-ink-200 bg-white text-ink-700',
  familiar: 'border-ink-100 bg-ink-50/70 text-ink-500',
};

const levelDot: Record<string, string> = {
  core: 'bg-[#C59B27]',
  working: 'bg-ink-400',
  familiar: 'bg-ink-300',
};

// ترجمة تصنيفات المهارات الشائعة
const categoryTranslations: Record<string, string> = {
  'Languages & Frameworks': 'لغات البرمجة وأطر العمل',
  'AI & Machine Learning': 'الذكاء الاصطناعي وتعلّم الآلة',
  'Web Development': 'تطوير الويب والواجهات',
  'Databases & Cloud': 'قواعد البيانات والحوسبة السحابية',
  'Tools & Methods': 'الأدوات والمنهجيات',
  'Libraries & APIs': 'المكتبات وواجهات البرمجة',
};

export function Skills() {
  const { isAr } = useLanguage();

  return (
    <Section id="skills" className="py-24 sm:py-32 bg-white border-y border-ink-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={isAr ? 'المهارات والتقنيات' : 'Skills'}
          title={isAr ? 'الأدوات والتقنيات التي أعمل بها' : 'Tools & technologies I work with'}

        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;
            const categoryName = isAr && categoryTranslations[group.category]
              ? categoryTranslations[group.category]
              : group.category;

            return (
              <div
                key={group.category}
                className="rounded-3xl border border-[#EADBCE] bg-[#FAF8F5]/40 p-6 hover:border-[#C59B27]/40 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADBCE] text-[#C59B27] shadow-2xs">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {categoryName}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.03] ${levelStyles[s.level]}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${levelDot[s.level]}`}
                        aria-hidden
                      />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* دليل توضيح مستويات المهارة معرب */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-ink-500 pt-2 border-t border-ink-100">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#C59B27]" />
            <strong className="text-ink-800 font-semibold">{isAr ? 'إتقان أساسي' : 'Core'}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink-400" />
            <span className="text-ink-700">{isAr ? 'استخدام تطبيقي' : 'Working'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink-300" />
            <span className="text-ink-600">{isAr ? 'إلمام ومعرفة' : 'Familiar'}</span>
          </span>
        </div>
      </div>
    </Section>
  );
}