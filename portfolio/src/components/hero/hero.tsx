"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { useRef } from "react";

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  facebook: string;
  cvUrl: string;
  profileImage: string;
  [key: string]: unknown;
}

interface HeroProps {
  data: PortfolioData;
}

export default function Hero({ data }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center
        bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Background decorative element */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]
          rounded-full opacity-[0.03] bg-[var(--color-accent)]
          -translate-y-1/2 translate-x-1/4 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-20">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center min-h-[80vh]">

          {/* Left: Profile Image */}
          <div
            className="relative flex justify-center md:justify-start order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full
                  border-2 border-[var(--color-accent)] opacity-30
                  scale-105 animate-pulse"
              />
              <div
                className="absolute inset-4 rounded-full
                  border border-[var(--color-border)]"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={data.profileImage}
                  alt={`${data.name} profile`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 384px, 448px"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            {/* Label */}
            <span
              className="inline-block text-sm font-sans font-medium
                text-[var(--color-accent)] uppercase tracking-widest
                border border-[var(--color-accent)] px-3 py-1 rounded-full"
            >
              Hello, I&apos;m
            </span>

            {/* Name */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl
              text-[var(--color-text)] leading-tight">
              {data.name}
            </h1>

            {/* Title / Subtitle */}
            <p className="text-xl md:text-2xl font-sans text-[var(--color-text-muted)]">
              {data.title}
            </p>

            {/* Bio */}
            <p className="text-base md:text-lg font-sans text-[var(--color-text-muted)]
              leading-relaxed max-w-lg">
              {data.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={data.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-[var(--color-accent)] text-[var(--color-bg)]
                  font-sans font-semibold text-sm
                  hover:bg-[var(--color-accent-hover)]
                  transition-all duration-200 hover:scale-[1.02]
                  hover:shadow-lg hover:shadow-[var(--color-accent)]/20
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
            <div className="flex items-center gap-4 pt-2">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  bg-[var(--color-bg-elevated)] border border-[var(--color-border)]
                  text-[var(--color-text-muted)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  transition-all duration-200 hover:scale-110"
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
                className="w-10 h-10 rounded-full flex items-center justify-center
                  bg-[var(--color-bg-elevated)] border border-[var(--color-border)]
                  text-[var(--color-text-muted)]
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                  transition-all duration-200 hover:scale-110"
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
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
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
