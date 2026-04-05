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

export default function Projects({ data }: { data: PortfolioData }) {
  const featured = data.projects.slice(0, 2);
  const regular = data.projects.slice(2);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-text-muted)]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Selected Work</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] mb-8 sm:mb-12 md:mb-16 leading-[0.9]">
            Recent
            <span className="block text-[var(--color-warm)]">Projects</span>
          </h2>
        </ScrollReveal>

        {/* FEATURED - Large horizontal cards */}
        <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
          {featured.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className="card overflow-hidden group rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Image */}
                  <div className={`md:col-span-5 relative aspect-video md:aspect-auto img-frame rounded-l-2xl ${i % 2 === 1 ? 'md:order-2 md:rounded-l-none md:rounded-r-2xl' : ''}`}>
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-2xl md:rounded-none"
                    />
                    {p.stars > 0 && (
                      <div className="absolute top-3 right-3 text-[10px] px-3 py-1 bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full font-medium shadow-sm">
                        ★ {p.stars}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-7 p-5 sm:p-6 md:p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--color-text)]">{p.name}</h3>
                      <span className="pill-tag text-[10px]">{p.language}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">{p.description}</p>

                    {/* Tags - Pill outline style */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t, ti) => (
                        <span key={ti} className="inline-block px-3 py-1 text-[10px] sm:text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons - Pill shape */}
                    <div className="flex gap-3">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-accent)] transition-all"
                      >
                        Code
                      </a>
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-medium bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full hover:bg-[var(--color-warm)]/90 transition-all"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* REGULAR - Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {regular.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`card overflow-hidden group h-full flex flex-col rounded-2xl ${i === 1 ? 'sm:mt-8' : ''}`}>
                {/* Image */}
                <div className="relative aspect-video img-frame rounded-t-2xl border-b border-[var(--color-border)]">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {p.stars > 0 && (
                    <div className="absolute top-3 right-3 text-[10px] px-3 py-1 bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full font-medium shadow-sm">
                      ★ {p.stars}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-lg text-[var(--color-text)]">{p.name}</h3>
                    <span className="pill-tag text-[10px]">{p.language}</span>
                  </div>

                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t, ti) => (
                      <span key={ti} className="inline-block px-2.5 py-0.5 text-[9px] sm:text-[10px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-[10px] sm:text-xs font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-accent)] transition-all"
                    >
                      Code
                    </a>
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-[10px] sm:text-xs font-medium bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full hover:bg-[var(--color-warm)]/90 transition-all"
                    >
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
