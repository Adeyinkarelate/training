import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PROGRAM_NAME } from "@/lib/constants";

const footerNav: Array<{ heading: string; links: Array<{ href: string; label: string }> }> = [
  {
    heading: "Program",
    links: [
      { href: "#learn", label: "Curriculum" },
      { href: "#event", label: "Details" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Join",
    links: [
      { href: "#register", label: "Pay & join" },
      { href: "#testimonials", label: "Stories" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-[var(--border)] px-4 pb-10 pt-16 sm:px-6 print:border-slate-300">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-500 text-[11px] font-bold text-slate-950"
              >
                <span className="font-mono">{"</>"}</span>
              </span>
              <span className="text-sm font-semibold tracking-tight text-[var(--fg)]">
                Full-Stack AI Lab
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fg-muted)]">
              A two-day intensive on building production-grade web apps with an
              AI-first workflow. Learn it once — use it on every project after.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)]">
              © {new Date().getFullYear()} {PROGRAM_NAME}
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg-strong)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-[var(--fg-subtle)]">
            {"> built with Next.js · TypeScript · Tailwind"}
          </p>
          <p className="font-mono text-[11px] text-[var(--fg-subtle)]">
            Notifications sent via EmailJS.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
