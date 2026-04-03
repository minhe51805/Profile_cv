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

const levelDots: Record<string, number> = {
  Experienced: 3,
  Intermediate: 2,
  Basic: 1,
};

function SkillRow({ name, level }: Skill) {
  const dots = levelDots[level] || 1;

  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)]/30 last:border-0 group hover:border-[var(--color-accent)]/30 transition-colors duration-200">
      <div className="flex items-center gap-3">
        {/* Checkmark icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-sm font-sans font-medium text-[var(--color-text)]">
          {name}
        </span>
      </div>
      {/* Proficiency dots */}
      <div className="flex items-center gap-1.5">
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              d <= dots
                ? "bg-[var(--color-accent)]"
                : "bg-[var(--color-border)]"
            }`}
          />
        ))}
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
      className="relative py-20 md:py-32 bg-[var(--color-bg)]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="section-label">Skills &amp; Experience</span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)] mb-16">
          What I Know
        </h2>

        {/* Skills Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Frontend Skills */}
          <ScrollReveal delay={100}>
            <h3 className="text-lg font-display font-semibold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Frontend Development
            </h3>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              {data.skills.frontend.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </ScrollReveal>

          {/* Backend Skills */}
          <ScrollReveal delay={200}>
            <h3 className="text-lg font-display font-semibold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
              Backend &amp; Tools
            </h3>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              {data.skills.backend.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
