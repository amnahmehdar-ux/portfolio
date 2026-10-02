import { Award, GraduationCap, Medal, type LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { timeline } from '@/data/experience';
import { profile } from '@/data/profile';

const timelineIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Microscope: Award,
  Users: Medal,
};

export function Education() {
  return (
    <Section id="experience" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="King Abdulaziz University"
          description="Bachelor's degree in Information Technology, Jeddah, Saudi Arabia."
        />

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Education card */}
          <div className="lg:col-span-1 rounded-3xl border border-ink-200 bg-white p-7 hover:shadow-soft transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-accent-400 mb-4">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-display text-lg font-bold text-ink-900">
              {profile.university}
            </h3>
            <p className="text-sm text-ink-600 mt-1">{profile.degree}</p>
            <p className="text-sm text-ink-400 mt-1">Class of {profile.graduationYear}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-800">
              <Award size={14} />
              {profile.graduationHonors}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold text-ink-900 mb-6">
              University journey
            </h3>
            <ol className="relative border-l-2 border-ink-200 ml-2 space-y-8">
              {timeline.map((entry, i) => {
                const Icon = timelineIconMap[entry.icon] ?? GraduationCap;
                return (
                  <li key={i} className="ml-6 relative">
                    <span className="absolute -left-[2.1rem] flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-accent-500 text-accent-600">
                      <Icon size={14} />
                    </span>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                        {entry.year}
                      </span>
                      <h4 className="font-semibold text-ink-900">{entry.title}</h4>
                    </div>
                    <p className="mt-1.5 text-sm text-ink-600 leading-relaxed max-w-xl">
                      {entry.description}
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