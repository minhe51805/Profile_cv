"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useState } from "react";

interface PortfolioData { email: string; github: string; facebook: string; [key: string]: unknown; }

export default function Contact({ data }: { data: PortfolioData }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(data.email); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div>
            <ScrollReveal>
              <span className="section-label text-[9px] sm:text-[10px]">Get In Touch</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] mb-4 sm:mb-6 leading-[0.9]">
                Let&apos;s Work<span className="block text-[var(--color-warm)]">Together</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-6 sm:mb-8 max-w-sm">
                Have a project in mind or want to collaborate? Feel free to reach out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Email - Clickable mailto link */}
              <a href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-all group mb-4 sm:mb-6 max-w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" className="group-hover:stroke-[var(--color-text)] transition-colors flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span className="font-semibold text-sm sm:text-base truncate">{data.email}</span>
              </a>
              <p className="text-xs text-[var(--color-text-muted)] mb-6 sm:mb-8">Click to send email</p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              {/* Socials */}
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { href: data.github, label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                  { href: data.facebook, label: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Decorative Grid */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`border border-[var(--color-border)] opacity-30 ${i % 3 === 0 ? 'bg-[var(--color-warm)]/10' : ''}`} />
                ))}
              </div>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="mono text-xs sm:text-sm text-[var(--color-text-muted)]">Say hello</span>
                  <span className="block text-xl sm:text-2xl font-display font-bold text-[var(--color-text)] mt-1">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
