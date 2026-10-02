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

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Code2,
  Globe,
  Database,
  Cpu,
  Wrench,
};

const levelStyles: Record<string, string> = {
  core: 'border-accent-300 bg-accent-50 text-accent-800',
  working: 'border-ink-200 bg-white text-ink-700',
  familiar: 'border-ink-200 bg-ink-50 text-ink-500',
};

const levelDot: Record<string, string> = {
  core: 'bg-accent-500',
  working: 'bg-ink-400',
  familiar: 'bg-ink-300',
};

export function Skills() {
  return (
    <Section id="skills" className="py-24 sm:py-32 bg-white border-y border-ink-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="Grouped by area. Filled tags are core strengths; lighter tags indicate working familiarity."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <div
                key={group.category}
                className="rounded-3xl border border-ink-200 bg-ink-50/50 p-6 hover:border-ink-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-ink-200 text-accent-600">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-900">
                    {group.category}
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

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Core
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-400" /> Working
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-300" /> Familiar
          </span>
        </div>
      </div>
    </Section>
  );
}
