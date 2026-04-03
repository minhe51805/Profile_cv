"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

interface PortfolioData {
  name: string;
  displayName: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  facebook: string;
  cvUrl: string;
  location: string;
  profileImage: string;
  experience: string;
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

interface HeroProps {
  data: PortfolioData;
}

export default function Hero({ data }: HeroProps) {
  // Stats from GitHub data
  const { repos, followers, stars } = data.githubStats;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-20 relative z-10">
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* LEFT: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 animate-fade-up">
            {/* Label */}
            <span className="text-sm font-sans font-medium text-[var(--color-accent)] uppercase tracking-widest mb-4">
              Hello, I'm
            </span>

            {/* Name - HUGE with text-stroke */}
            <h1 className="font-display font-bold leading-none mb-4">
              <span className="block text-[clamp(3rem,8vw,7rem)] text-stroke">
                {data.name.split(" ")[0].toUpperCase()}
              </span>
              <span className="block text-[clamp(3rem,8vw,7rem)] text-stroke">
                {data.name.split(" ")[1]?.toUpperCase()}
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl font-sans text-[var(--color-text-muted)] mb-6">
              {data.title}
            </p>

            {/* Bio */}
            <p className="text-base md:text-lg font-sans text-[var(--color-text-muted)] leading-relaxed max-w-lg mb-8">
              {data.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={data.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-[var(--color-accent)] text-[var(--color-bg)]
                  font-sans font-semibold text-sm
                  hover:bg-[var(--color-accent-hover)]
                  transition-all duration-200 hover:scale-[1.02]
                  active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>

              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-transparent text-[var(--color-text)]
                  border border-[var(--color-border)]
                  font-sans font-semibold text-sm
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  transition-all duration-200 hover:scale-[1.02]
                  active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  border border-[var(--color-border)]
                  text-[var(--color-text-muted)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  hover:scale-110
                  transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  border border-[var(--color-border)]
                  text-[var(--color-text-muted)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  hover:scale-110
                  transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Profile Image with Blur Glow */}
          <ScrollReveal delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Blur Glow Behind Image */}
              <div
                className="absolute inset-0 rounded-full
                  bg-[var(--color-accent)] blur-[120px] opacity-25
                  scale-90 -translate-x-4 -translate-y-4"
              />

              {/* Border Ring */}
              <div
                className="absolute inset-4 rounded-full
                  border-2 border-[var(--color-accent)]/30"
              />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-bg)]">
                <Image
                  src={data.profileImage}
                  alt={`${data.name} profile`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 384px, 420px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row at Bottom */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-[var(--color-border)]/50">
          <ScrollReveal delay={100} className="text-center">
            <span className="stat-number">{repos}</span>
            <p className="text-xs md:text-sm font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
              Repositories
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="text-center">
            <span className="stat-number">{stars}</span>
            <p className="text-xs md:text-sm font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
              Total<br />Stars
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300} className="text-center">
            <span className="stat-number">{followers}</span>
            <p className="text-xs md:text-sm font-sans text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
              Followers
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const target = document.querySelector("#about");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          text-[var(--color-text-muted)] hover:text-[var(--color-accent)]
          transition-all duration-300 cursor-pointer bg-transparent border-none"
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
    </section>
  );
}