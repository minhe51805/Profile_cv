"use client";

import ScrollReveal from "@/components/scroll-reveal";

interface PortfolioData {
  email: string;
  github: string;
  facebook: string;
  [key: string]: unknown;
}

interface ContactProps {
  data: PortfolioData;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-[var(--color-bg)]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center relative z-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="section-label justify-center">Get In Touch</span>
        </div>

        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[var(--color-text)] mb-6">
            Let&apos;s Work Together
          </h2>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={100}>
          <p className="font-sans text-lg text-[var(--color-text-muted)] mb-12 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </ScrollReveal>

        {/* Email Link */}
        <ScrollReveal delay={200}>
          <a
            href={`mailto:${data.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-[var(--color-card)] border border-[var(--color-border)]
              text-[var(--color-text)] font-sans font-semibold text-lg
              hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
              hover:scale-[1.02]
              transition-all duration-300 active:scale-95 mb-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--color-accent)]"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {data.email}
          </a>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-6">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full flex items-center justify-center
                border border-[var(--color-border)]
                text-[var(--color-text-muted)]
                hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                hover:scale-110
                transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              className="w-12 h-12 rounded-full flex items-center justify-center
                border border-[var(--color-border)]
                text-[var(--color-text-muted)]
                hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                hover:scale-110
                transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
