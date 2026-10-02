import { Section, SectionHeading } from './Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  const dentek = projects[0];
  const rest = projects.slice(1);

  return (
    <Section id="projects" className="py-24 sm:py-32 bg-white border-y border-ink-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Hands-on work across AI / computer vision, LLM / RAG, and machine learning / data analysis."
        />

        {/* Dentek — full width, most prominent */}
        <div className="mt-12">
          <ProjectCard project={dentek} />
        </div>

        {/* Remaining projects — two-column grid */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
