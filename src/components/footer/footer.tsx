export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-[var(--color-text-muted)]">
            &copy; 2024 Minh Truong. All rights reserved.
          </p>
          <p className="font-sans text-sm text-[var(--color-text-muted)] flex items-center gap-1.5">
            Built with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
