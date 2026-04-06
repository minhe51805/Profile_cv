"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useState } from "react";

interface Skill {
  name: string;
  level: string;
}

interface PortfolioData {
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  projects: {
    name: string;
    tags: string[];
    githubUrl: string;
  }[];
}

const levelConfig: Record<string, { color: string }> = {
  Experienced: { color: "bg-[var(--color-warm)]" },
  Intermediate: { color: "bg-[var(--color-text-muted)]/50" },
  Basic: { color: "bg-[var(--color-text-muted)]/25" },
};

const skillTagMap: Record<string, string[]> = {
  React: ["Next.js", "React"],
  "Next.js": ["Next.js"],
  TypeScript: ["TypeScript"],
  "Tailwind CSS": ["Tailwind"],
  "HTML/CSS": ["HTML", "CSS"],
  JavaScript: ["JavaScript"],
  "Material UI": ["Material"],
  "SASS/SCSS": ["SASS", "SCSS"],
  FastAPI: ["FastAPI"],
  "Node.js": ["Node.js"],
  PostgreSQL: ["PostgreSQL"],
  Python: ["Python"],
  Rust: ["Rust"],
  Git: ["Git"],
};

function getReposForSkill(skillName: string, projects: PortfolioData["projects"]) {
  const tags = skillTagMap[skillName] || [skillName];
  return projects.filter((project) =>
    project.tags.some((tag) =>
      tags.some((matchedTag) => tag.toLowerCase().includes(matchedTag.toLowerCase()))
    )
  );
}

function SkillNode({
  skill,
  projects,
}: {
  skill: Skill;
  projects: PortfolioData["projects"];
}) {
  const [showRepos, setShowRepos] = useState(false);
  const config = levelConfig[skill.level];
  const repos = getReposForSkill(skill.name, projects);

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-2 sm:gap-3 group cursor-pointer"
      onMouseEnter={() => setShowRepos(true)}
      onMouseLeave={() => setShowRepos(false)}
    >
      <div
        className={`rounded-full ${config.color} transition-transform duration-300 group-hover:scale-110
          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16`}
      />

      <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[var(--color-text-muted)] font-medium text-center leading-tight max-w-[60px] sm:max-w-[80px] truncate">
        {skill.name}
      </span>

      {showRepos && repos.length > 0 && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-44 sm:w-48 z-50">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-3 shadow-xl">
            <p className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2 font-semibold">
              Related Repos
            </p>
            <div className="flex flex-col gap-1.5">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--color-text)] hover:text-[var(--color-warm)] transition-colors truncate"
                >
                  {`-> ${repo.name}`}
                </a>
              ))}
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
            <div className="w-2 h-2 rotate-45 bg-[var(--color-card)] border-r border-b border-[var(--color-border)]" />
          </div>
        </div>
      )}
    </div>
  );
}

function SkillRow({
  skills,
  label,
  projects,
}: {
  skills: Skill[];
  label: string;
  projects: PortfolioData["projects"];
}) {
  return (
    <div className="mb-8 sm:mb-10 last:mb-0">
      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-6 sm:mb-8 px-2">
        {label}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6">
        {skills.map((skill) => (
          <SkillNode key={skill.name} skill={skill} projects={projects} />
        ))}
      </div>
    </div>
  );
}

export default function Skills({ data }: { data: PortfolioData }) {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-text-muted)]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Skills</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] leading-[1.1] mb-3 sm:mb-4">
            Skill<span className="text-[var(--color-warm)]">Map</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mb-8 sm:mb-12">
            Hover over a skill to see related projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative w-full bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl sm:rounded-3xl overflow-hidden py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative">
              <SkillRow skills={data.skills.frontend} label="Frontend" projects={data.projects} />

              <div className="divider my-6 sm:my-8 md:my-10 opacity-50" />

              <SkillRow skills={data.skills.backend} label="Backend & Tools" projects={data.projects} />
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 text-[9px] sm:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-warm)]" />
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--color-text-muted)]/50" />
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--color-text-muted)]/25" />
                <span>Basic</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
