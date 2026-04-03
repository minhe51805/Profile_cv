"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

interface Education {
  school: string;
  degree: string;
}

interface PortfolioData {
  bio: string;
  experience: string;
  education: Education;
  aboutImage: string;
}

interface AboutProps {
  data: PortfolioData;
}

export default function About({ data }: AboutProps) {
  const scrollToExperience = () => {
    const target = document.querySelector("#experience");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[var(--color-bg)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Label */}
        <div className="mb-4">
          <span className="text-sm font-sans font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
            Get To Know More
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)] mb-12">
          About Me
        </h2>

        {/* Content Grid */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-accent)] opacity-30 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--color-border)] rounded-lg" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[var(--color-card)]">
                <Image
                  src={data.aboutImage}
                  alt="About Minh Truong"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Experience Card */}
              <div className="p-6 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <p className="text-xs font-sans text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
                      Experience
                    </p>
                    <p className="text-sm font-sans font-semibold text-[var(--color-text)]">
                      {data.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <p className="text-xs font-sans text-[var(--color-text-muted)] uppercase tracking-wide mb-1">
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
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-base md:text-lg font-sans text-[var(--color-text-muted)] leading-relaxed">
                {data.bio}
              </p>
            </div>
          </div>
        </ScrollReveal>
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