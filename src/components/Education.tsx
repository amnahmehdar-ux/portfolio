import { Award, GraduationCap, Medal, type LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { timeline } from '@/data/experience';
import { profile } from '@/data/profile';
import { useLanguage } from '../context/LanguageContext';

const timelineIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Microscope: Award,
  Users: Medal,
};

// قاموس ترجمة محطات المسيرة الجامعية
const timelineTranslations: Record<
  string,
  { titleAr: string; descAr: string; yearAr?: string }
> = {
  'Graduation': {
    titleAr: 'التخرج مع مرتبة الشرف',
    descAr: 'خريجة تقنية معلومات من جامعة الملك عبدالعزيز بتقدير ممتاز مع مرتبة الشرف.',
    yearAr: '2026',
  },
  'Graduation Project — Dentek': {
    titleAr: 'مشروع التخرج — نظام Dentek',
    descAr: 'تطوير منصة Dentek لدعم تشخيص أشعة الأسنان البانورامية بالذكاء الاصطناعي، تجمع بين الرؤية الحاسوبية وتعلّم الآلة وتطبيق ويب متكامل.',
    yearAr: '2025–2026',
  },
  'Technology Department': {
    titleAr: 'القسم التقني — منظمة IEEE KAU',
    descAr: 'المساهمة في بناء المشاريع التقنية والحلول الرقمية، وتولي قيادة قسم التوثيق والإنتاج لمدة عامين متتاليين.',
    yearAr: 'IEEE KAU',
  },
};

export function Education() {
  const { isAr } = useLanguage();

  return (
    <Section id="experience" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={isAr ? 'التعليم والمسار الأكاديمي' : 'Education'}
          title={isAr ? 'جامعة الملك عبدالعزيز' : 'King Abdulaziz University'}
          description={
            isAr
              ? 'بكالوريوس في تقنية المعلومات، جدة، المملكة العربية السعودية.'
              : "Bachelor's degree in Information Technology, Jeddah, Saudi Arabia."
          }
        />

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* بطاقة المؤهل الأكاديمي */}
          <div className="lg:col-span-1 rounded-3xl border border-[#EADBCE] bg-white p-7 hover:shadow-soft transition-all h-fit">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-[#C59B27] mb-4">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-display text-lg font-bold text-ink-900">
              {isAr ? 'جامعة الملك عبدالعزيز' : profile.university}
            </h3>
            <p className="text-sm text-ink-600 mt-1">
              {isAr ? 'بكالوريوس تقنية معلومات' : profile.degree}
            </p>
            <p className="text-sm text-ink-400 mt-1">
              {isAr ? `دفعة ${profile.graduationYear}` : `Class of ${profile.graduationYear}`}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-800">
              <Award size={14} className="text-[#C59B27]" />
              {isAr ? 'مرتبة الشرف' : profile.graduationHonors}
            </div>
          </div>

          {/* الخط الزمني للمسيرة الجامعية */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold text-ink-900 mb-6">
              {isAr ? 'المحطات والمسيرة الجامعية' : 'University journey'}
            </h3>

            <ol
              className={`relative space-y-8 ${
                isAr
                  ? 'border-r-2 border-ink-200 mr-3 pr-6'
                  : 'border-l-2 border-ink-200 ml-3 pl-6'
              }`}
            >
              {timeline.map((entry, i) => {
                const Icon = timelineIconMap[entry.icon] ?? GraduationCap;
                
                // مطابقة الترجمة إن وجدت
                const matched = timelineTranslations[entry.title];
                const displayTitle = isAr && matched ? matched.titleAr : entry.title;
                const displayDesc = isAr && matched ? matched.descAr : entry.description;
                const displayYear = isAr && matched?.yearAr ? matched.yearAr : entry.year;

                return (
                  <li key={i} className="relative">
                    <span
                      className={`absolute top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-[#C59B27] text-[#C59B27] shadow-2xs ${
                        isAr ? '-right-[2.1rem]' : '-left-[2.1rem]'
                      }`}
                    >
                      <Icon size={14} />
                    </span>

                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
                        {displayYear}
                      </span>
                      <h4 className="font-semibold text-ink-900">
                        {displayTitle}
                      </h4>
                    </div>

                    <p className="mt-1.5 text-sm text-ink-600 leading-relaxed max-w-xl">
                      {displayDesc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}