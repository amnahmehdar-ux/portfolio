import {
  CalendarCheck,
  Code2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Trophy,
  Users,
  Wrench,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { useLanguage } from '../context/LanguageContext';

const competencies = [
  { icon: CalendarCheck, en: 'Event Management', ar: 'إدارة الفعاليات' },
  { icon: Users, en: 'Team Leadership', ar: 'قيادة فرق العمل' },
  { icon: Code2, en: 'Technical Dev', ar: 'تطوير تقني' },
  { icon: HeartHandshake, en: 'Student Engagement', ar: 'المشاركة الطلابية' },
  { icon: Lightbulb, en: 'Initiative Planning', ar: 'تخطيط المبادرات' },
  { icon: Trophy, en: 'Sports Coordination', ar: 'التنسيق الرياضي' },
  { icon: Sparkles, en: 'Cultural Activities', ar: 'أنشطة قيمية وثقافية' },
  { icon: Wrench, en: 'Problem Solving', ar: 'حل المشكلات' },
];

export function Experience() {
  const { isAr } = useLanguage();

  return (
    <Section id="leadership" className="py-24 sm:py-32 relative">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        
        <SectionHeading
          eyebrow={isAr ? 'الأنشطة التطوعية واللاصفية' : 'Volunteering & Extracurricular Activities'}
          title={isAr ? 'القيادة الطلابية والمساهمات التقنية' : 'Student Leadership & Technical Involvement'}
          description={
            isAr
              ? 'إدارة لجان الكلية، قيادة الأنشطة الطلابية، وتطوير الحلول البرمجية التطبيقية.'
              : 'Faculty committee management, club leadership, and technical solutions development.'
          }
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* اليمين: خط زمني تفاعلي على شكل بطاقات إنجاز */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* بطاقة لجان الكلية FCIT */}
            <div className="group relative p-6 sm:p-7 rounded-3xl border border-[#EADBCE] bg-white/70 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#C59B27]/40">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/10 text-[#C59B27] border border-[#C59B27]/20">
                  <Trophy size={13} />
                  {isAr ? 'دور قيادي · سنتين متتاليتين' : 'Leadership · 2 Consecutive Years'}
                </span>
                <span className="text-xs font-mono text-ink-400">FCIT — KAU</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-2">
                {isAr
                  ? 'كلية الحاسبات وتقنية المعلومات — اللجان الطلابية'
                  : 'Faculty of Computing & Information Technology (FCIT)'}
              </h3>

              <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-4">
                {isAr
                  ? 'قيادة تنظيم الفعاليات والتنسيق الطلابي عبر اللجنتين الرياضية والإسلامية.'
                  : 'Led event management and student coordination across Sports and Islamic Committees.'}
              </p>

              <div className="space-y-2 pt-3 border-t border-ink-100/70 text-xs sm:text-sm text-ink-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C59B27] shrink-0" />
                  <span>{isAr ? 'إدارة وتنظيم البطولات والأنشطة التنافسية على مستوى الكلية' : 'Organized campus-wide sports tournaments'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C59B27] shrink-0" />
                  <span>{isAr ? 'التخطيط للمبادرات المجتمعية والقيمية والفعاليات الثقافية' : 'Planned cultural and community initiatives'}</span>
                </div>
              </div>
            </div>

            {/* بطاقة IEEE KAU */}
            <div className="group relative p-6 sm:p-7 rounded-3xl border border-[#EADBCE] bg-white/70 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#C59B27]/40">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#3D1420]/10 text-[#3D1420] border border-[#3D1420]/20">
                  <Code2 size={13} />
                  {isAr ? 'مساهمة تقنية وتطوير' : 'Technical Development'}
                </span>
                <span className="text-xs font-mono text-ink-400">IEEE Student Branch</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-2">
                {isAr
                  ? 'الفرع الطلابي لمنظمة IEEE — القسم التقني'
                  : 'IEEE KAU Student Branch — Technology Department'}
              </h3>

              <p className="text-sm sm:text-base text-ink-600 leading-relaxed mb-4">
                {isAr
                  ? 'التعاون مع فرق العمل لتصميم وبناء مشاريع تقنية وحلول برمجية رقمية تحول الأفكار إلى واقع عملي.'
                  : 'Collaborated with team members to design and build technical projects and digital software solutions.'}
              </p>

              <div className="space-y-2 pt-3 border-t border-ink-100/70 text-xs sm:text-sm text-ink-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#3D1420] shrink-0" />
                  <span>{isAr ? 'تطوير مشاريع وحلول تقنية مبتكرة' : 'Engineered hands-on software & tech solutions'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#3D1420] shrink-0" />
                  <span>{isAr ? 'العمل الجماعي التقني وحل المشكلات البرمجية' : 'Collaborative code delivery and agile workflows'}</span>
                </div>
              </div>
            </div>

            {/* ملخص الأثر */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-white border border-[#EADBCE]/60 text-xs sm:text-sm text-ink-500 leading-relaxed">
              💡 {isAr
                ? 'طوّرت هذه المسيرة توازناً استثنائياً يجمع بين سرعة الإنجاز البرمجي وحسن إدارة الفرق والفعاليات تحت مختلف الظروف.'
                : 'Forged a strong balance uniting hands-on technical software delivery with leadership and structured event management.'}
            </div>

          </div>

          {/* اليسار: شبكة الكفاءات التفاعلية بنمط Bento */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl border border-[#EADBCE] bg-white/80 backdrop-blur-md shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Layers size={17} className="text-[#C59B27]" />
                  <h3 className="text-base font-bold text-ink-900">
                    {isAr ? 'الكفاءات والقدرات المكتسبة' : 'Key Competencies'}
                  </h3>
                </div>
                <span className="text-xs font-mono text-ink-400 bg-ink-50 px-2 py-0.5 rounded-full border border-ink-100">
                  {competencies.length} Skills
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {competencies.map(({ icon: Icon, en, ar }) => (
                  <div
                    key={en}
                    className="group flex flex-col justify-between p-3.5 rounded-2xl border border-ink-100/80 bg-[#FAF8F5]/60 hover:bg-white hover:border-[#C59B27]/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#C59B27] shadow-2xs border border-[#EADBCE]/50 group-hover:bg-[#3D1420] group-hover:text-white transition-colors duration-200">
                        <Icon size={16} />
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-ink-800 group-hover:text-ink-950 transition-colors">
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