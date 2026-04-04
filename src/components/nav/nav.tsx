"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/theme-toggle/theme-toggle";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
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
    <nav
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${scrolled 
          ? "w-auto max-w-xl px-2 sm:px-3 py-1.5 sm:py-2" 
          : "w-[95%] max-w-3xl px-3 sm:px-5 py-2 sm:py-3"
        }
        bg-[var(--color-card)]/90 backdrop-blur-md
        rounded-full border border-[var(--color-border)]
        shadow-sm`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Back to top"
          onClick={(e) => { e.preventDefault(); handleNavClick("#"); }}
          className="font-display font-bold text-sm sm:text-base text-[var(--color-text)]
            hover:text-[var(--color-text-muted)] transition-colors"
        >
          MT<span className="text-[var(--color-warm)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium
                text-[var(--color-text-muted)]
                hover:text-[var(--color-text)] hover:bg-[var(--color-cream)]
                rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-7 h-7 sm:w-8 sm:h-8 flex flex-col items-center justify-center gap-[3px]
              bg-transparent cursor-pointer"
          >
            <span className={`block w-3.5 sm:w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
            <span className={`block w-3.5 sm:w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-3.5 sm:w-4 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 mt-1.5 sm:mt-2
        ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 pt-2 border-t border-[var(--color-border)]">
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
    </nav>
  );
}
