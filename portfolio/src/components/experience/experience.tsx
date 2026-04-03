"use client";

import ScrollReveal from "@/components/scroll-reveal";

interface Skill {
  name: string;
  level: string;
}

interface Skills {
  frontend: Skill[];
  backend: Skill[];
}

interface PortfolioData {
  skills: Skills;
}

interface ExperienceProps {
  data: PortfolioData;
}

const levelMap: Record<string, number> = {
  Experienced: 3,
  Intermediate: 2,
  Basic: 1,
};

function SkillTag({ name, level }: Skill) {
  const dots = levelMap[level] || 1;
  return (
    <div className="group relative flex flex-col items-start p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <span className="text-sm font-sans font-medium text-[var(--color-text)] mb-3">
        {name}
      </span>
      <div className="flex items-center gap-1.5">
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              d <= dots
                ? "bg-[var(--color-accent)]"
                : "bg-[var(--color-border)]"
            }`}
          />
        ))}
        <span className="text-[10px] font-sans text-[var(--color-text-muted)] ml-1 capitalize">
          {level.toLowerCase()}
        </span>
      </div>
    </div>
  );
}

export default function Experience({ data }: ExperienceProps) {
  const scrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="section-label">Skills & Experience</span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)] mb-16">
          What I Know
        </h2>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend */}
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-[var(--color-text)]">
                Frontend
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.skills.frontend.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </ScrollReveal>

          {/* Backend */}
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                  <path d="M3 12A9 3 0 0 0 21 12" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-[var(--color-text)]">
                Backend &amp; Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.skills.backend.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16">
        <button
          onClick={scrollToProjects}
          aria-label="Scroll to projects section"
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer bg-transparent border-none"
        >
          <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
