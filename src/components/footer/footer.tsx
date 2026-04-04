export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">&copy; 2026 Minh Truong. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] flex items-center gap-1.5">
            Built with <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
