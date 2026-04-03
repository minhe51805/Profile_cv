"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

interface Education {
  school: string;
  degree: string;
}

interface PortfolioData {
  bio: string;
  location: string;
  experience: string;
  education: Education;
  aboutImage: string;
  githubStats: {
    repos: number;
    followers: number;
    following: number;
    stars: number;
  };
  skills: {
    frontend: { name: string; level: string }[];
    backend: { name: string; level: string }[];
  };
  projects: { name: string }[];
  [key: string]: unknown;
}

interface AboutProps {
  data: PortfolioData;
}

export default function About({ data }: AboutProps) {
  const yearsExp = "2+";
  const totalSkills = data.skills.frontend.length + data.skills.backend.length;
  const totalProjects = data.projects.length;
  const { repos, followers, following, stars } = data.githubStats;

  const scrollToExperience = () => {
    const target = document.querySelector("#experience");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[var(--color-bg)]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="section-label">About Me</span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)] mb-16">
          Get To Know More
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Image with Blur Glow */}
          <ScrollReveal className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 blur-glow">
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={data.aboutImage}
                  alt="About Minh Truong"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Decorative ring overlay */}
              <div className="absolute inset-0 rounded-2xl border border-[var(--color-accent)]/20" />
            </div>
          </ScrollReveal>

          {/* RIGHT: Content */}
          <div className="flex flex-col gap-10">
            {/* GitHub Stats Row */}
            <div className="grid grid-cols-4 gap-3">
              <ScrollReveal delay={100} className="text-center p-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <span className="stat-number-sm">{stars}</span>
                <p className="text-[9px] font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1 leading-tight">
                  Stars
                </p>
              </ScrollReveal>
              <ScrollReveal delay={150} className="text-center p-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <span className="stat-number-sm">{repos}</span>
                <p className="text-[9px] font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1 leading-tight">
                  Repos
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200} className="text-center p-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <span className="stat-number-sm">{followers}</span>
                <p className="text-[9px] font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1 leading-tight">
                  Followers
                </p>
              </ScrollReveal>
              <ScrollReveal delay={250} className="text-center p-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <span className="stat-number-sm">{yearsExp}</span>
                <p className="text-[9px] font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1 leading-tight">
                  Years Exp
                </p>
              </ScrollReveal>
            </div>

            {/* Bio */}
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg font-sans text-[var(--color-text-muted)] leading-relaxed">
                {data.bio}
              </p>
            </ScrollReveal>

            {/* Info Row */}
            <ScrollReveal delay={300} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Experience */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-sans text-[var(--color-text-muted)] uppercase tracking-wide mb-0.5">
                    Experience
                  </p>
                  <p className="text-sm font-sans font-semibold text-[var(--color-text)]">
                    {data.experience}
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-sans text-[var(--color-text-muted)] uppercase tracking-wide mb-0.5">
                    Education
                  </p>
                  <p className="text-sm font-sans font-semibold text-[var(--color-text)]">
                    {data.education.school}
                  </p>
                  <p className="text-xs font-sans text-[var(--color-text-muted)]">
                    {data.education.degree}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16">
        <button
          onClick={scrollToExperience}
          aria-label="Scroll to experience section"
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
