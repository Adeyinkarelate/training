import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";

const quotes = [
  {
    name: "Chidi Okafor",
    role: "Product manager · Lagos",
    text: "I shipped a client landing page in one weekend using the exact AI stack from the workshop — zero engineering backlog.",
    initials: "CO",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    name: "Amara Bello",
    role: "Freelance marketer",
    text: "Finally a class focused on delivery, not syntax. The recordings let me replay the tricky deployment parts at my own pace.",
    initials: "AB",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    name: "Ibrahim Musa",
    role: "Startup founder",
    text: "Clear structure from blank page to hosted site. The follow-ups and email confirmations were professional end-to-end.",
    initials: "IM",
    accent: "from-emerald-400 to-teal-500",
  },
];

function Quote() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7h4v4H9v3a2 2 0 0 1-2 2H6v-2h1a1 1 0 0 0 1-1v-2H7V7Zm8 0h4v4h-2v3a2 2 0 0 1-2 2h-1v-2h1a1 1 0 0 0 1-1v-2h-1V7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <MotionSection id="testimonials" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="section-divider mx-auto max-w-6xl" aria-hidden />
      <div className="mx-auto mt-16 max-w-6xl">
        <div className="max-w-2xl">
          <span className="eyebrow">// voices</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--fg-strong)] sm:text-4xl">
            What past participants say.
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--fg-muted)]">
            Placeholder quotes for layout — swap with real stories anytime.
          </p>
        </div>

        <MotionStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <MotionItem key={q.name} className="panel panel-accent panel-lift flex flex-col p-7">
              <div className="text-cyan-300/60">
                <Quote />
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--fg)]">
                {q.text}
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${q.accent} text-xs font-bold text-slate-950`}
                  aria-hidden
                >
                  {q.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[var(--fg-strong)]">
                    {q.name}
                  </p>
                  <p className="truncate font-mono text-[11px] text-[var(--fg-subtle)]">
                    {q.role}
                  </p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  );
}
