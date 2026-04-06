"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

interface PortfolioData {
  bio: string; location: string; currentFocus: string;
  education: { school: string; degree: string };
  aboutImage: string;
  githubStats: { repos: number; followers: number; following: number; stars: number };
  [key: string]: unknown;
}

export default function About({ data }: { data: PortfolioData }) {
  const { repos, followers, following, stars } = data.githubStats;

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* BROKEN GRID: Image takes left half, content flows right with offset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24">

          {/* LEFT: Image - Fixed position, sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <div className="relative">
                <div className="img-frame w-full aspect-square border border-[var(--color-border)]">
                  <Image src={data.aboutImage} alt="About" fill className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                {/* Decorative square behind */}
                <div className="absolute -z-10 -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 border border-[var(--color-border)] hidden lg:block" />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Content - Flows */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 lg:pt-12 xl:pt-16">

            <ScrollReveal>
              <div>
                <span className="section-label text-[9px] sm:text-[10px]">About Me</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] leading-[0.9]">
                  Get To Know<span className="block text-[var(--color-warm)]">More</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: "GitHub Stars", value: stars },
                  { label: "Repositories", value: repos },
                  { label: "Followers", value: followers },
                  { label: "Following", value: following }
                ].map((s) => (
                  <div key={s.label} className="stat py-3 sm:py-4 px-3 sm:px-4">
                    <span className="stat-number-sm text-xl sm:text-2xl">{s.value}</span>
                    <span className="stat-label text-[8px] sm:text-[9px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={200}>
              <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
                {data.bio}
              </p>
            </ScrollReveal>

            {/* Info Cards */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="card p-4 sm:p-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 sm:mb-3 card-flat flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-[var(--color-text-muted)] uppercase mb-1">Current Focus</p>
                  <p className="text-sm font-semibold">{data.currentFocus}</p>
                </div>
                <div className="card p-4 sm:p-5 sm:mt-6 lg:mt-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 sm:mb-3 card-flat flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-[var(--color-text-muted)] uppercase mb-1">Education</p>
                  <p className="text-sm font-semibold">{data.education.school}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{data.education.degree}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
