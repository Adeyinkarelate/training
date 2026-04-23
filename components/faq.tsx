"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MotionSection } from "@/components/motion-section";
import { getProgramFeeNgn, PROGRAM_NAME, RECORDING_NOTE } from "@/lib/constants";

const faqs = [
  {
    q: "What does it cost?",
    a: `Tuition is ₦${getProgramFeeNgn().toLocaleString("en-NG")}. Pay into the ADEXBIT LEARNING HUB account (Kuda MFB) shown on this page, then share your receipt in the WhatsApp group to confirm your seat. Discounts like the first 20 subscribers still apply when announced in the group.`,
  },
  {
    q: "When do I get the class recordings?",
    a: RECORDING_NOTE,
  },
  {
    q: "Do I need prior coding experience?",
    a: `Not at all. ${PROGRAM_NAME} is designed for beginners through advanced learners who want to build with AI-assisted workflows. Bring curiosity and a laptop with a modern browser.`,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <MotionSection id="faq" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">{"// questions"}</span>
        <h2 className="text-fluid-section mt-3 text-balance font-semibold tracking-tight text-[var(--fg-strong)]">
          Frequently asked.
        </h2>
        <p className="text-fluid-lead mt-4 text-pretty text-[var(--fg-muted)]">
          Quick answers before you enroll.
        </p>

        <ul className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className={`panel overflow-hidden transition ${
                  isOpen ? "border-[var(--border-accent)]" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 font-mono text-xs text-[var(--fg-subtle)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium text-[var(--fg-strong)]">
                      {item.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-xl leading-none text-[var(--fg-muted)]"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[var(--border)] px-4 pb-5 pt-4 text-sm leading-relaxed text-[var(--fg-muted)] sm:px-6 sm:pl-14">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </MotionSection>
  );
}
