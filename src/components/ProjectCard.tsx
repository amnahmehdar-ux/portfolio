import {
  Activity,
  ArrowUpRight,
  Crop,
  FileText,
  Github,
  ScanLine,
  Search,
  Stethoscope,
  ExternalLink,
} from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '../context/LanguageContext';

const isPlaceholder = (v: string) => !v || v.includes('_URL');

const dentekPipeline = [
  { icon: Activity, en: 'Panoramic X-Ray', ar: 'أشعة بانورامية' },
  { icon: Search, en: 'Tooth Detection', ar: 'رصد الأسنان' },
  { icon: Crop, en: 'Tooth Cropping', ar: 'قص وتحديد السن' },
  { icon: ScanLine, en: 'AI Classification', ar: 'تصنيف بالذكاء الاصطناعي' },
  { icon: Stethoscope, en: 'Findings', ar: 'النتائج الطبية' },
  { icon: FileText, en: 'Structured Report', ar: 'تقرير مفصّل' },
];

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project: p, className = '' }: Props) {
  const { isAr } = useLanguage();
  const hasImage = Boolean(p.image && !p.image.includes('_IMAGE'));

  return (
    <article
      className={`group relative flex flex-col rounded-3xl border border-[#EADBCE] bg-white overflow-hidden hover:border-[#C59B27]/50 hover:shadow-xl transition-all duration-300 h-full ${className}`}
    >
      {/* منطقة الصورة */}
      {hasImage && (
        <div className="relative aspect-[16/10] bg-gradient-to-br from-[#FAF8F5] to-white overflow-hidden border-b border-[#EADBCE] flex items-center justify-center p-3">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            className="relative max-h-full max-w-full object-contain rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* رقم المشروع */}
          <span className="absolute top-4 start-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#3D1420] text-white font-mono text-xs font-bold shadow-md">
            {p.number}
          </span>

          {/* بادج مشروع التخرج أو غيره معرب */}
          {p.badge && (
            <span className="absolute top-4 end-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#C59B27]/30 px-3 py-1 text-xs font-semibold text-[#8C6D1B] shadow-2xs backdrop-blur">
              <Stethoscope size={13} className="text-[#C59B27]" />
              {isAr && p.badge.toLowerCase().includes('graduation')
                ? 'مشروع تخرج'
                : p.badge}
            </span>
          )}
        </div>
      )}

      {/* تفاصيل المشروع */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {!hasImage && (
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3D1420] text-white font-mono text-xs font-bold">
              {p.number}
            </span>
            {p.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#C59B27]/30 px-3 py-1 text-xs font-semibold text-[#8C6D1B]">
                <Stethoscope size={13} className="text-[#C59B27]" />
                {isAr && p.badge.toLowerCase().includes('graduation')
                  ? 'مشروع تخرج'
                  : p.badge}
              </span>
            )}
          </div>
        )}

        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#C59B27]">
          {p.category}
        </span>

        <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
          {p.title}
        </h3>

        <p className="mt-3 text-ink-600 text-sm leading-relaxed">
          {p.description}
        </p>

        {/* تنبيه دعم القرار الطبي لمشروع Dentek */}
        {p.id === 'dentek' && (
          <div className="mt-4 rounded-xl border border-[#C59B27]/30 bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#8C6D1B] leading-relaxed">
            {isAr ? (
              <>
                <strong className="font-bold text-ink-900">نظام دعم قرار سريري، وليس بديلاً:</strong>{' '}
                صُمم Dentek لمساندة أطباء الأسنان، حيث يظل الطبيب هو المسؤول الأول عن التشخيص والتقرير النهائي.
              </>
            ) : (
              <>
                <strong className="font-semibold text-ink-900">Decision-support, not replacement.</strong>{' '}
                Dentek supports dentists — the dentist remains responsible for the final interpretation and report.
              </>
            )}
          </div>
        )}

        {/* مميزات المشروع Highlights */}
        {p.highlights && p.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-ink-700">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C59B27] shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* مراحل عمل Dentek (Pipeline) */}
        {p.id === 'dentek' && (
          <div className="mt-5 rounded-2xl border border-ink-100 bg-[#FAF8F5]/80 p-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {dentekPipeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.en} className="flex items-center shrink-0">
                    <div className="flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 border border-[#EADBCE] shadow-2xs">
                      <Icon size={12} className="text-[#C59B27]" />
                      <span className="text-[10px] font-medium text-ink-700 whitespace-nowrap">
                        {isAr ? step.ar : step.en}
                      </span>
                    </div>
                    {i < dentekPipeline.length - 1 && (
                      <span className={`text-ink-300 mx-1 text-xs ${isAr ? 'rotate-180' : ''}`}>
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* التقنيات المستخدمة Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-[#EADBCE] bg-[#FAF8F5] px-2.5 py-1 text-xs font-medium text-ink-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* أزرار العرض والأكواد */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-ink-100/70 mt-auto">
          {p.buttons.map((btn) => {
            const placeholder = isPlaceholder(btn.href);
            const isLive = btn.variant === 'primary';

            return (
              <a
                key={btn.label}
                href={placeholder ? undefined : btn.href}
                target={placeholder ? undefined : '_blank'}
                rel={placeholder ? undefined : 'noopener noreferrer'}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isLive
                    ? 'bg-[#3D1420] text-white hover:bg-[#2A0D16] shadow-xs'
                    : 'border border-[#EADBCE] bg-white text-ink-800 hover:border-[#C59B27] hover:bg-[#FAF8F5]'
                }`}
              >
                {isLive ? (
                  <>
                    <span>{isAr ? 'معاينة المشروع' : btn.label}</span>
                    <ExternalLink size={14} />
                  </>
                ) : (
                  <>
                    <Github size={14} />
                    <span>{isAr ? 'قيت هب' : btn.label}</span>
                  </>
                )}
              </a>
            );
          })}
        </div>

      </div>
    </article>
  );
}