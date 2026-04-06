"use client";

import ScrollReveal from "@/components/scroll-reveal";

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  bullets: string[];
}

interface PortfolioData {
  workExperience: WorkExperience[];
}

function ExperienceCard({ item }: { item: WorkExperience }) {
  return (
    <article className="relative sm:pl-14">
      <div className="hidden sm:flex absolute left-0 top-8 w-6 h-6 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[var(--color-warm)]" />
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
          <div>
            <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-warm)]" />
              {item.type}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-text)] leading-tight">
              {item.role}
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] mt-1">
              {item.company}
            </p>
          </div>

          <span className="self-start px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-cream)] text-[11px] sm:text-xs text-[var(--color-text)] font-medium">
            {item.period}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-5 sm:mb-6">
          {item.description}
        </p>

        <ul className="grid gap-2.5 sm:gap-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-warm)] shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience({ data }: { data: PortfolioData }) {
  return (
    <section id="experience" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-text-muted)]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Experience</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] leading-[1.05] mb-3 sm:mb-4">
            Practical<span className="text-[var(--color-warm)]">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            I am still preparing for my first formal full-time role, so this section highlights the real hands-on experience I have built through projects, team work, and continuous learning.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)] mb-2">
                  Current Status
                </p>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
                  Open to internship and junior frontend opportunities while continuing to grow through product shipping, hackathons, and open-source style collaboration.
                </p>
              </div>
              <span className="tag self-start md:self-center">Available for Internship / Junior Role</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mt-8 sm:mt-10">
          <div className="hidden sm:block absolute left-3 top-3 bottom-3 w-px bg-[var(--color-border)]" />

          <div className="space-y-5 sm:space-y-6">
            {data.workExperience.map((item, index) => (
              <ScrollReveal key={`${item.company}-${item.role}`} delay={180 + index * 120}>
                <ExperienceCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
