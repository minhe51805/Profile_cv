"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/theme-toggle/theme-toggle";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Nav Pill */}
      <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav
          className={`flex items-center gap-1.5 transition-all duration-500 pointer-events-auto
            ${scrolled
              ? "max-w-xl px-5"
              : "px-5"
            }
            bg-[var(--color-card)]/90 backdrop-blur-md
            rounded-full border border-[var(--color-border)]
            shadow-sm`}
          style={{ height: "40px", width: "fit-content" }}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Back to top"
            onClick={(e) => { e.preventDefault(); handleNavClick("#"); }}
            className="font-display font-bold text-sm text-[var(--color-text)]
              hover:text-[var(--color-text-muted)] transition-colors"
          >
            MT<span className="text-[var(--color-warm)]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-2.5 py-1 text-xs font-medium
                  text-[var(--color-text-muted)]
                  hover:text-[var(--color-text)] hover:bg-[var(--color-cream)]
                  rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-0.5">
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center
                bg-transparent cursor-pointer rounded-full
                hover:bg-[var(--color-cream)] transition-colors"
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className={`block w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-14 left-4 right-4 z-40 md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 bg-[var(--color-card)]/95 backdrop-blur-md rounded-2xl border border-[var(--color-border)] px-4 py-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm text-[var(--color-text-muted)]
                hover:text-[var(--color-text)] py-2 px-4
                rounded-full hover:bg-[var(--color-cream)]
                transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
