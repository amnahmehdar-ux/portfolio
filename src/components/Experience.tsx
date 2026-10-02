import {
  CalendarCheck,
  Code2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react';
import { Section, SectionHeading } from './Section';

const skills = [
  { icon: CalendarCheck, label: 'Event Management' },
  { icon: Users, label: 'Team Leadership' },
  { icon: Code2, label: 'Technical Project Dev' },
  { icon: HeartHandshake, label: 'Student Engagement' },
  { icon: Lightbulb, label: 'Initiative Planning' },
  { icon: Trophy, label: 'Sports Coordination' },
  { icon: Sparkles, label: 'Cultural & Values Activities' },
  { icon: Wrench, label: 'Problem Solving' },
];

export function Experience() {
  return (
    <Section id="leadership" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Volunteering & Extracurricular Activities"
          title="Student Leadership & Technical Involvement"
          description="Faculty committee management, club leadership, and technical solutions development."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-ink-600 text-base leading-relaxed">
            {/* FCIT Committees */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-ink-900 font-display">
                Faculty of Computing & Information Technology (FCIT)
              </h3>
              <p>
                Served for <strong className="text-ink-900">two consecutive years</strong> leading event management and student coordination across both the{' '}
                <strong className="text-ink-900">Sports and Islamic Committees</strong> — organizing tournaments, planning community initiatives, and managing faculty-wide student activities.
              </p>
            </div>

            {/* IEEE KAU */}
            <div className="space-y-2 pt-2 border-t border-ink-100">
              <h3 className="text-lg font-bold text-ink-900 font-display">
                IEEE KAU Student Branch — Technology Department
              </h3>
              <p>
                Contributed actively within the <strong className="text-ink-900">Technology Department</strong>, collaborating with team members to design and build technical projects and digital solutions, translating ideas into working software.
              </p>
            </div>

            <p className="text-sm text-ink-500 pt-1">
              These experiences developed a balanced skill set uniting hands-on technical execution with team leadership, communication, and adaptable event execution under tight deadlines.
            </p>
          </div>

          {/* Key Competencies Side Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 mb-4">
                Key competencies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl bg-ink-50 px-3.5 py-3"
                  >
                    <Icon size={16} className="text-accent-600 shrink-0" />
                    <span className="text-xs font-medium text-ink-700">{label}</span>
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