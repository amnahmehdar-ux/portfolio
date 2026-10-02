import {
  Activity,
  ArrowUpRight,
  Crop,
  FileText,
  Github,
  ImagePlus,
  ScanLine,
  Search,
  Stethoscope,
} from 'lucide-react';
import type { Project } from '@/data/projects';

const isPlaceholder = (v: string) => v.includes('_URL');

const dentekPipeline = [
  { icon: Activity, label: 'Panoramic X-Ray' },
  { icon: Search, label: 'Tooth Detection' },
  { icon: Crop, label: 'Tooth Cropping' },
  { icon: ScanLine, label: 'AI Classification' },
  { icon: Stethoscope, label: 'Findings' },
  { icon: FileText, label: 'Structured Report' },
];

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project: p, className = '' }: Props) {
  const hasImage = Boolean(p.image && !p.image.includes('_IMAGE'));

  return (
    <article
      className={`group relative flex flex-col rounded-3xl border border-ink-200 bg-white overflow-hidden hover:border-accent-300 hover:shadow-lift transition-all duration-300 ${className}`}
    >
      {/* Image area: تظهر فقط عند وجود صورة */}
      {hasImage && (
        <div className="relative aspect-[16/10] bg-gradient-to-br from-ink-50 to-white overflow-hidden border-b border-ink-100 flex items-center justify-center p-3">
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            className="relative max-h-full max-w-full object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Number badge */}
          <span className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900/90 text-white font-mono text-xs font-semibold backdrop-blur">
            {p.number}
          </span>

          {/* Graduation badge */}
          {p.badge && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-amber-50/95 border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-800 backdrop-blur">
              <Stethoscope size={12} />
              {p.badge}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* إذا لم تكن هناك صورة، نعرض البادج ورقم المشروع هنا في رأس النص */}
        {!hasImage && (
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900/90 text-white font-mono text-xs font-semibold">
              {p.number}
            </span>
            {p.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50/95 border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-800">
                <Stethoscope size={12} />
                {p.badge}
              </span>
            )}
          </div>
        )}

        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
          {p.category}
        </span>
        <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
          {p.title}
        </h3>
        <p className="mt-3 text-ink-600 text-sm leading-relaxed">{p.description}</p>

        {/* Dentek decision-support note */}
        {p.id === 'dentek' && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 px-3.5 py-2.5 text-xs text-amber-800">
            <strong className="font-semibold">Decision-support, not replacement.</strong>{' '}
            Dentek supports dentists — the dentist remains responsible for the final
            interpretation and report.
          </div>
        )}

        {/* Highlights */}
        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-ink-700">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Dentek pipeline */}
        {p.id === 'dentek' && (
          <div className="mt-5 rounded-2xl border border-ink-200 bg-ink-50/60 px-3.5 py-3">
            <div className="flex items-center gap-1 overflow-x-auto">
              {dentekPipeline.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center shrink-0">
                  <div className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 border border-ink-200">
                    <Icon size={13} className="text-accent-600" />
                    <span className="text-[11px] font-medium text-ink-700 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                  {i < dentekPipeline.length - 1 && (
                    <span className="text-ink-300 mx-0.5 text-xs" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 pt-1 mt-auto">
          {p.buttons.map((btn) => {
            const placeholder = isPlaceholder(btn.href);
            if (btn.variant === 'primary') {
              return (
                <a
                  key={btn.label}
                  href={placeholder ? undefined : btn.href}
                  target={placeholder ? undefined : '_blank'}
                  rel={placeholder ? undefined : 'noopener noreferrer'}
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 transition-all"
                >
                  {btn.label}
                  <ArrowUpRight
                    size={15}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </a>
              );
            }
            return (
              <a
                key={btn.label}
                href={placeholder ? undefined : btn.href}
                target={placeholder ? undefined : '_blank'}
                rel={placeholder ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 hover:border-ink-400 transition-all"
              >
                <Github size={15} />
                {btn.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}