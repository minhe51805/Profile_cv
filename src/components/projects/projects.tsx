"use client";

import ScrollReveal from "@/components/scroll-reveal";

interface Project {
  name: string; description: string; tags: string[];
  githubUrl: string; demoUrl: string; imageUrl: string;
  stars: number; language: string;
}
interface PortfolioData { projects: Project[]; [key: string]: unknown; }

export default function Projects({ data }: { data: PortfolioData }) {
  const featured = data.projects.slice(0, 2);
  const regular = data.projects.slice(2);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <ScrollReveal>
          <span className="section-label text-[9px] sm:text-[10px]">Selected Work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] mb-8 sm:mb-12 md:mb-16 leading-[0.9]">
            Recent<span className="block text-[var(--color-warm)]">Projects</span>
          </h2>
        </ScrollReveal>

        {/* FEATURED - Large horizontal cards */}
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
          {featured.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className="card overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className={`md:col-span-5 relative aspect-video md:aspect-auto img-frame ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    {p.stars > 0 && <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/90 rounded-full shadow-sm">★ {p.stars}</div>}
                  </div>
                  <div className={`md:col-span-7 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">{p.name}</h3>
                    <span className="tag w-fit mb-3 sm:mb-4 text-[10px] sm:text-[11px]">{p.language}</span>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 sm:mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {p.tags.map((t, ti) => <span key={ti} className="tag text-[9px] sm:text-[10px]">{t}</span>)}
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-[10px] sm:text-xs">Code</a>
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-[10px] sm:text-xs">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* REGULAR - Masonry-style 3 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {regular.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`card overflow-hidden group h-full flex flex-col ${i === 1 ? 'sm:mt-6 lg:mt-8' : ''}`}>
                <div className="relative aspect-video img-frame border-b border-[var(--color-border)]">
                  <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  {p.stars > 0 && <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/90 rounded-full shadow-sm">★ {p.stars}</div>}
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="font-display font-bold text-base sm:text-lg">{p.name}</h3>
                    <span className="tag text-[9px] sm:text-[10px]">{p.language}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 sm:mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {p.tags.map((t, ti) => <span key={ti} className="tag text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5">{t}</span>)}
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-[9px] sm:text-[10px] flex-1 justify-center">Code</a>
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-[9px] sm:text-[10px] flex-1 justify-center">Demo</a>
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
