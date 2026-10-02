import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, visible } = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
