"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

interface PortfolioData {
  name: string; displayName: string; title: string; bio: string;
  email: string; github: string; facebook: string; cvUrl: string;
  location: string; profileImage: string; experience: string;
  githubStats: { repos: number; followers: number; following: number; stars: number };
  skills: { frontend: { name: string; level: string }[]; backend: { name: string; level: string }[] };
  projects: { name: string }[]; [key: string]: unknown;
}

export default function Hero({ data }: { data: PortfolioData }) {
  const { repos, followers, stars } = data.githubStats;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-[var(--color-bg)] overflow-x-hidden pt-16">

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-20 h-20 border border-[var(--color-border)] opacity-25 hidden lg:block rotate-12" />
      <div className="absolute bottom-32 left-24 w-12 h-12 bg-[var(--color-warm)]/10 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">

        {/* NAME - Full width, massive */}
        <div className="mb-6 sm:mb-8 max-w-full">
          <ScrollReveal>
            <div className="label-float mb-4 sm:mb-6 w-fit text-[10px] sm:text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Available for work
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="w-full overflow-hidden">
              <h1 className="font-display font-black leading-[0.9] text-[var(--color-text)]">
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {data.name.split(" ")[0]}
                </div>
                <div className="text-[var(--color-warm)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {data.name.split(" ")[1]}
                </div>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4 sm:mt-6 gap-4 sm:gap-6">
              <div>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)] mb-2 max-w-sm">
                  {data.title}
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">
                  {data.bio}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a href={data.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download CV
                </a>
                <a href={`mailto:${data.email}`} className="btn btn-outline text-xs sm:text-sm">Contact</a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* IMAGE + STATS - Bottom section */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-[var(--color-border)]">

            {/* Profile Image */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <div className="img-frame w-full h-full border border-[var(--color-border)]">
                  <Image src={data.profileImage} alt={data.name} fill className="object-cover" priority
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px" />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-2 -right-2 card p-2 sm:p-3 shadow-sm">
                  <span className="stat-number text-lg sm:text-xl">{stars}</span>
                  <span className="stat-label text-[8px] sm:text-[9px]">Stars</span>
                </div>
              </div>
            </div>

            {/* Stats + Socials */}
            <div className="md:col-span-8 flex flex-col justify-between">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { label: "Repositories", value: repos },
                  { label: "Followers", value: followers },
                  { label: "Projects", value: data.projects.length }
                ].map((s) => (
                  <div key={s.label} className="stat py-3 sm:py-4 px-2 sm:px-4">
                    <span className="stat-number text-xl sm:text-2xl md:text-3xl">{s.value}</span>
                    <span className="stat-label text-[8px] sm:text-[9px]">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  { href: data.github, label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                  { href: data.facebook, label: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
