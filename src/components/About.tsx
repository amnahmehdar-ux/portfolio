import { 
  MessageSquare, 
  Compass, 
  Layers, 
  Lightbulb, 
  Microscope, 
  Users, 
  Code2, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { Section } from './Section';
import { useLanguage } from '../context/LanguageContext';

const softSkills = [
  { icon: MessageSquare, en: 'Communication', ar: 'التواصل الفعّال' },
  { icon: Users, en: 'Leadership', ar: 'القيادة وإدارة الفرق' },
  { icon: Layers, en: 'Teamwork', ar: 'العمل الجماعي' },
  { icon: Compass, en: 'Organization', ar: 'التخطيط والتنظيم' },
  { icon: Lightbulb, en: 'Problem Solving', ar: 'حل المشكلات المعقدة' },
  { icon: Microscope, en: 'Technical Focus', ar: 'الشغف التقني والبحث' },
];

export function About() {
  const { isAr } = useLanguage();

  return (
    <Section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-[#C59B27] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B27]">
            {isAr ? 'نبذة عني' : 'About Me'}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* النص والقصة الشخصية */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 ${
              isAr ? 'leading-[1.4] tracking-normal' : 'leading-[1.2] tracking-tight'
            }`}>
              {isAr ? (
                <>
                  أكثر من مجرد دراسة أكاديمية —{' '}
                  <span className="inline-block my-1 bg-gradient-to-r from-[#C59B27] to-[#8C6D1B] bg-clip-text text-transparent pb-1">
                    شغف عملي
                  </span>{' '}
                  في تقنية المعلومات والذكاء الاصطناعي.
                </>
              ) : (
                <>
                  More than coursework — a{' '}
                  <span className="bg-gradient-to-r from-[#C59B27] to-[#8C6D1B] bg-clip-text text-transparent">
                    hands-on foundation
                  </span>{' '}
                  in IT and AI.
                </>
              )}
            </h2>

            <div className="space-y-4 text-ink-600 text-base sm:text-lg leading-relaxed">
              <p>
                {isAr ? (
                  <>
                    مسيرتي في <strong className="text-ink-900 font-semibold">جامعة الملك عبدالعزيز</strong> لم تكن مجرد ساعات دراسية، بل تجربة عملية صقلتها الأنشطة واللجان والمشاريع الواقعية. هذا المزيج بنى لدي مهارات قوية تجمع بين التفكير التحليلي والتواصل القيادي.
                  </>
                ) : (
                  <>
                    My time at <strong className="text-ink-900 font-semibold">King Abdulaziz University</strong> was shaped by real-world engagement — from committees to hands-on projects — forging both strong technical rigor and leadership abilities.
                  </>
                )}
              </p>

              {/* بطاقة الاقتباس الإبداعي */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#F3EDE2] border border-[#EADBCE] shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#C59B27]/15 text-[#C59B27] shrink-0 mt-0.5">
                    <Sparkles size={18} />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ink-800 leading-normal">
                    {isAr
                      ? '« أستمتع بتحويل التحديات والبيانات الصعبة إلى حلول تقنية ذكية تترك أثراً حقيقياً وملموساً. »'
                      : '“I thrive on turning complex problems and raw data into intelligent software solutions with genuine impact.”'}
                  </p>
                </div>
              </div>

              {/* عدادات سريعة */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-ink-100 bg-white/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium mb-1">
                    <GraduationCap size={15} className="text-[#C59B27]" />
                    {isAr ? 'التعليم' : 'Education'}
                  </div>
                  <div className="font-bold text-ink-900 text-sm sm:text-base">
                    {isAr ? 'تقنية معلومات' : 'IT Major'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-ink-100 bg-white/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium mb-1">
                    <Code2 size={15} className="text-[#C59B27]" />
                    {isAr ? 'التركيز' : 'Focus'}
                  </div>
                  <div className="font-bold text-ink-900 text-sm sm:text-base">
                    {isAr ? 'ذكاء اصطناعي وبيانات' : 'AI & Data'}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl border border-ink-100 bg-white/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium mb-1">
                    <Sparkles size={15} className="text-[#C59B27]" />
                    {isAr ? 'الدفعة' : 'Class of'}
                  </div>
                  <div className="font-bold text-ink-900 text-sm sm:text-base">
                    2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* عمود المهارات الشخصية */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl border border-[#EADBCE]/80 bg-white/80 backdrop-blur-md shadow-sm">
              <h3 className="text-base font-bold text-ink-900 mb-4 flex items-center justify-between">
                <span>{isAr ? 'المهارات الشخصية والقيادية' : 'Key Capabilities'}</span>
                <span className="text-xs font-normal text-ink-400 bg-ink-50 px-2.5 py-1 rounded-full border border-ink-200/60">
                  {softSkills.length} {isAr ? 'ركائز' : 'Pillars'}
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {softSkills.map(({ icon: Icon, en, ar }) => (
                  <div
                    key={en}
                    className="group flex items-center gap-3.5 rounded-xl border border-transparent bg-[#FAF8F5]/80 hover:bg-white hover:border-[#C59B27]/40 hover:shadow-sm px-3.5 py-3 transition-all duration-200"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C59B27]/10 text-[#C59B27] group-hover:bg-[#3D1420] group-hover:text-white transition-colors duration-200">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-semibold text-ink-800 group-hover:text-ink-950">
                      {isAr ? ar : en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}