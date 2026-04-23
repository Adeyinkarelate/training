import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";

const cards = [
  {
    number: "01",
    title: "Full-stack without boilerplate",
    body: "Ship complete products — UI, data, auth, deploy — using a modern AI-assisted stack that removes the busywork.",
    tag: "Workflow",
  },
  {
    number: "02",
    title: "Speed that feels like magic",
    body: "Use AI pair-programming to plan, prototype, debug and iterate in minutes instead of days. Build confidence fast.",
    tag: "AI-first",
  },
  {
    number: "03",
    title: "Portfolio-ready projects",
    body: "Leave with a repeatable blueprint for client work: landing pages, dashboards, internal tools — all yours to reuse.",
    tag: "Deliverables",
  },
  {
    number: "04",
    title: "Two focused days",
    body: "From the first line to a live URL in a single weekend. Momentum-driven, hands-on, beginner-friendly.",
    tag: "Tempo",
  },
];

export function ProgramOverview() {
  return (
    <MotionSection id="learn" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">// curriculum</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--fg-strong)] sm:text-4xl">
              What you’ll actually build.
            </h2>
            <p className="mt-4 text-pretty text-lg text-[var(--fg-muted)]">
              Outcomes, not theory slides. Walk away with workflows you can reuse on
              paid client work or your next product idea.
            </p>
          </div>
          <div className="hidden text-right font-mono text-xs uppercase tracking-widest text-[var(--fg-subtle)] sm:block">
            04 modules
          </div>
        </div>

        <MotionStagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <MotionItem
              key={card.title}
              className="panel panel-accent panel-lift group p-7"
            >
              <div className="flex items-center justify-between">
                <span className="index-badge">{card.number}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {card.tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--fg-strong)]">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--fg-muted)]">
                {card.body}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  );
}
