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

const levelStyles: Record<string, { bg: string; text: string; border: string }> = {
  Experienced: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/30",
  },
  Intermediate: {
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/30",
  },
  Basic: {
    bg: "bg-gray-500/10",
    text: "text-gray-600 dark:text-gray-400",
    border: "border-gray-500/30",
  },
};

function SkillItem({ name, level }: Skill) {
  const styles = levelStyles[level] || levelStyles.Basic;

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-sm font-sans font-medium text-[var(--color-text)]">
          {name}
        </span>
      </div>
      <span
        className={`text-xs font-sans font-medium px-2 py-1 rounded-full ${styles.bg} ${styles.text} border ${styles.border}`}
      >
        {level}
      </span>
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
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="text-sm font-sans font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
            Explore My
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)] mb-12">
          Experience
        </h2>

        {/* Skills Grid */}
        <ScrollReveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Frontend Skills */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-display font-semibold text-[var(--color-text)]">
              Frontend Development
            </h3>
            <div className="grid gap-3">
              {data.skills.frontend.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-display font-semibold text-[var(--color-text)]">
              Backend & Tools
            </h3>
            <div className="grid gap-3">
              {data.skills.backend.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </ScrollReveal>
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