"use client";

import ScrollReveal from "@/components/scroll-reveal";

interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  stars: number;
  language: string;
}

interface PortfolioData {
  projects: Project[];
  [key: string]: unknown;
}

interface ProjectsProps {
  data: PortfolioData;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-[var(--color-bg)]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <span className="section-label">Selected Work</span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-[var(--color-text)] mb-10 md:mb-16">
          Recent Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100} className="group">
              <div className="relative flex flex-col h-full bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:border-[var(--color-accent)]/40 hover:shadow-xl transition-all duration-300 ease-out">
                {/* Project Image */}
                <div className="relative w-full aspect-video overflow-hidden bg-[var(--color-bg-elevated)]">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Project Name + Language badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-[var(--color-text)]">
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                      {project.language}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags as Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-2.5 py-0.5 text-[11px] font-sans font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] font-sans font-medium text-xs rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-[1.02] transition-all duration-200 active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] font-sans font-medium text-xs rounded-lg hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] transition-all duration-200 active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
