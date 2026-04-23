import Link from "next/link";
import { PROGRAM_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 bg-[var(--bg)]">
      <div className="hero-grid" aria-hidden />
      <div className="hero-mesh" aria-hidden />
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
        error · 404
      </p>
      <h1 className="text-fluid-section mt-3 text-center font-semibold tracking-tight text-[var(--fg-strong)]">
        <span className="gradient-text">Page not found.</span>
      </h1>
      <p className="mt-3 max-w-md text-center text-[var(--fg-muted)]">
        That URL does not exist. Head back to the {PROGRAM_NAME} landing page.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
