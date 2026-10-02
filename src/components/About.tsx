import { MessageSquare, Compass, Layers, Lightbulb, Microscope, Users } from 'lucide-react';
import { Section } from './Section';
import { profile } from '@/data/profile';

const softSkills = [
  { icon: MessageSquare, label: 'Communication' },
  { icon: Users, label: 'Leadership' },
  { icon: Layers, label: 'Teamwork' },
  { icon: Compass, label: 'Organization' },
  { icon: Lightbulb, label: 'Problem solving' },
  { icon: Microscope, label: 'Technical skills' },
];

export function About() {
  return (
    <Section id="about" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 mb-3">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
              More than coursework — a hands-on foundation in IT and AI.
            </h2>
            <div className="mt-6 space-y-5 text-ink-600 text-base sm:text-lg leading-relaxed">
              <p>
                My time at {profile.university} was shaped by more than academic study. Through
                university activities, committees, and technical projects, I developed practical
                skills in communication, leadership, teamwork, organization, and problem solving —
                alongside the technical foundation my degree provided.
              </p>
              <p>
                Through building real projects, I became particularly interested in artificial
                intelligence and data-driven solutions. Turning messy, real-world problems into
                working technology is what I enjoy most, and it is the direction I want to keep
                growing in.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {softSkills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-white/70 backdrop-blur px-4 py-4 hover:border-accent-300 hover:shadow-soft transition-all"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
