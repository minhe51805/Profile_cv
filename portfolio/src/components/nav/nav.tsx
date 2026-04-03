"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full
        bg-[var(--color-bg)]/80 backdrop-blur-md
        border-b border-[var(--color-border)]
        transition-all duration-300"
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--color-accent)] z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Minh Truong - Back to top"
          className="font-display font-bold text-lg text-[var(--color-text)]
            hover:text-[var(--color-accent)] transition-colors duration-200"
        >
          Minh Truong
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-sans text-[var(--color-text-muted)]
                hover:text-[var(--color-accent)] transition-colors duration-200
                relative after:absolute after:bottom-[-2px] after:left-0 after:w-0
                after:h-[1px] after:bg-[var(--color-accent)]
                hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex flex-col items-center justify-center gap-[5px]
              bg-transparent border-none cursor-pointer"
          >
            <span
              className={`block w-5 h-[2px] bg-[var(--color-text)] transition-all duration-300
                ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--color-text)] transition-all duration-300
                ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--color-text)] transition-all duration-300
                ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-4 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-base font-sans text-[var(--color-text-muted)]
                hover:text-[var(--color-accent)] transition-colors duration-200
                py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
