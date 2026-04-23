"use client";

import { useEffect, useState } from "react";
import { getEventStartTimestampMs } from "@/lib/constants";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const target = getEventStartTimestampMs();
  /** `null` until mount so server + first client paint match (avoids hydration mismatch from Date.now()). */
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    const t = window.setTimeout(() => setNow(Date.now()), 0);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(id);
    };
  }, []);

  const diff = now === null ? null : Math.max(0, target - now);
  const days = diff === null ? 0 : Math.floor(diff / 86_400_000);
  const hours = diff === null ? 0 : Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = diff === null ? 0 : Math.floor((diff % 3_600_000) / 60_000);
  const seconds = diff === null ? 0 : Math.floor((diff % 60_000) / 1000);
  const done = diff !== null && diff === 0;
  const pending = diff === null;

  const cells = [
    { label: "Days", value: days },
    { label: "Hrs", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div className="mt-12">
      <p className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)] lg:justify-start">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
        />
        {done ? "We’re live — join the Meet" : "Cohort starts in"}
      </p>
      <div className="mx-auto mt-4 grid w-full max-w-[min(100%,20rem)] grid-cols-4 divide-x divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] backdrop-blur-md lg:mx-0 lg:max-w-none lg:inline-flex lg:w-auto">
        {cells.map((c) => (
          <div
            key={c.label}
            className="min-w-0 px-2 py-3 text-center sm:px-4 sm:py-4 lg:min-w-[88px] lg:px-5"
          >
            <p className="text-fluid-stat tabular font-mono font-semibold tracking-tight text-[var(--fg-strong)]">
              {pending
                ? "—"
                : done
                  ? "00"
                  : c.label === "Sec"
                    ? pad(c.value)
                    : c.label === "Days"
                      ? c.value
                      : pad(c.value)}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--fg-subtle)]">
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
