import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import {
  getProgramFeeNgn,
  MEET_INVITE_URL,
  PROGRAM_DATES,
  PROGRAM_VENUE,
  RECORDING_NOTE,
} from "@/lib/constants";
import { CopyInviteButton } from "@/components/copy-invite-button";

function formatNgn(n: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
}

type Item = {
  title: string;
  body: string;
  Icon: () => React.ReactElement;
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M11 9l5 3-5 3V9Z" fill="currentColor" />
  </svg>
);
const PriceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v18M7 7h7a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h9" />
  </svg>
);

export function EventHighlights() {
  const fee = getProgramFeeNgn();
  const items: Item[] = [
    { title: "Date", body: PROGRAM_DATES, Icon: CalendarIcon },
    { title: "Venue", body: PROGRAM_VENUE, Icon: GlobeIcon },
    { title: "Recordings", body: RECORDING_NOTE, Icon: PlayIcon },
    {
      title: "Fee",
      body: `${formatNgn(fee)} · discount for the first 20 subscribers`,
      Icon: PriceIcon,
    },
  ];

  return (
    <MotionSection id="event" className="scroll-mt-24 w-full min-w-0 px-4 py-24 sm:px-6">
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <span className="eyebrow">{"// the essentials"}</span>
          <h2 className="text-fluid-section mt-3 text-balance font-semibold tracking-tight text-[var(--fg-strong)]">
            Event details.
          </h2>
          <p className="text-fluid-lead mt-4 text-pretty text-[var(--fg-muted)]">
            Everything you need to join us live — with a recording backup for
            when life happens.
          </p>
        </div>

        <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, body, Icon }) => (
            <MotionItem key={title} className="panel panel-lift p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-300 ring-1 ring-inset ring-white/10">
                <div className="h-5 w-5">
                  <Icon />
                </div>
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-[var(--fg-strong)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                {body}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="min-w-0 w-full flex-1 sm:text-left">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)]">
              google-meet://invite
            </p>
            <p className="mt-1 break-all font-mono text-sm text-[var(--fg)]">
              {MEET_INVITE_URL}
            </p>
          </div>
          <div className="shrink-0 sm:self-auto">
            <CopyInviteButton />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
