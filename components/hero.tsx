"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Countdown } from "@/components/countdown";
import { HeroCodePreview } from "@/components/hero-code-preview";
import { PROGRAM_DATES, PROGRAM_VENUE } from "@/lib/constants";

const stats = [
  { value: "2", label: "Intensive days" },
  { value: "48h", label: "From idea to live" },
  { value: "0", label: "Lines of boilerplate" },
];

export function Hero() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36">
      <div className="hero-grid -z-20" aria-hidden />
      <div className="hero-mesh -z-20" aria-hidden />

      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        <div className="min-w-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="chip max-w-full flex-wrap justify-center">
              <span className="chip-dot" aria-hidden />
              <span className="text-[var(--fg)]">Live cohort</span>
              <span className="text-[var(--fg-subtle)]" aria-hidden>
                ·
              </span>
              <span>{PROGRAM_DATES}</span>
              <span className="text-[var(--fg-subtle)]" aria-hidden>
                ·
              </span>
              <span>{PROGRAM_VENUE}</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-hero mt-6 text-balance font-semibold tracking-tight text-[var(--fg-strong)]"
          >
            Build full-stack web apps{" "}
            <span className="gradient-text">at the speed of thought.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-fluid-lead mx-auto mt-6 max-w-xl text-pretty text-[var(--fg-muted)] lg:mx-0"
          >
            A two-day intensive for curious minds. Ship real, production-grade
            websites using modern AI-powered workflows — no prior coding needed.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
              <Link
                href="#register"
                className="btn-primary min-w-[200px]"
                aria-label="Scroll to payment and WhatsApp enrollment"
              >
                Pay &amp; join
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
              <Link href="#learn" className="btn-ghost">
                Explore curriculum
              </Link>
            </motion.div>
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--border)] pt-8 lg:mx-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)]">
                  {s.label}
                </dt>
                <dd className="text-fluid-stat mt-1 font-semibold tracking-tight text-[var(--fg-strong)]">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <Countdown />
        </div>

        <HeroCodePreview />
      </div>
    </section>
  );
}
