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
  const contactMethods = [
    {
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      ),
    },
    {
      label: "GitHub",
      value: data.github,
      href: data.github,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      value: "Facebook Profile",
      href: data.facebook,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[var(--color-bg)]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-sans font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--color-text)]">
            Contact Me
          </h2>
        </div>

        {/* Contact Cards */}
        <ScrollReveal delay={300} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8
                bg-[var(--color-card)] border border-[var(--color-border)]
                rounded-xl text-center
                hover:border-[var(--color-accent)]/50
                hover:shadow-lg hover:shadow-[var(--color-accent)]/10
                hover:-translate-y-1
                transition-all duration-300 ease-out"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center
                  bg-[var(--color-bg)] border border-[var(--color-border)]
                  text-[var(--color-text-muted)]
                  group-hover:text-[var(--color-accent)]
                  group-hover:border-[var(--color-accent)]/50
                  rounded-xl transition-all duration-300"
              >
                {method.icon}
              </div>

              {/* Label */}
              <div>
                <h3 className="font-display font-semibold text-base text-[var(--color-text)] mb-1">
                  {method.label}
                </h3>
                <p className="font-sans text-sm text-[var(--color-text-muted)] break-all">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
