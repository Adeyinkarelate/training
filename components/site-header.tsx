"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
const nav = [
  { href: "#learn", label: "Curriculum" },
  { href: "#event", label: "Details" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

const navListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <motion.span
              aria-hidden
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-500 text-[11px] font-bold tracking-tight text-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
            >
              <span className="font-mono">{"</>"}</span>
            </motion.span>
            <span className="min-w-0 flex flex-col leading-none">
              <span className="truncate text-sm font-semibold tracking-tight text-[var(--fg)]">
                Full-Stack AI Lab
              </span>
              <span className="mt-0.5 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)] sm:block">
                build · ship · earn
              </span>
            </span>
          </Link>
        </motion.div>

        <motion.nav
          variants={navListVariants}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <motion.div key={item.href} variants={navItemVariants}>
              <Link
                href={item.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  aria-hidden
                  className="absolute inset-0 -z-0 rounded-full bg-white/5"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#register"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.5)] transition hover:brightness-110 lg:inline-flex"
            >
              Pay &amp; join →
            </Link>
          </motion.div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white/5 p-2 text-[var(--fg)] transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <motion.svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </motion.svg>
          </button>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden border-t border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--fg)] hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * nav.length, duration: 0.25 }}
              >
                <Link
                  href="#register"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-sm font-semibold text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  Pay &amp; join →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
