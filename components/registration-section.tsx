import Image from "next/image";
import { MotionSection } from "@/components/motion-section";
import { InfoCard } from "@/components/info-card";
import { WhatsAppEnrollmentPanel } from "@/components/whatsapp-enrollment-panel";
import {
  getProgramFeeNgn,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_BANK_NAME,
  PROGRAM_DATES,
  PROGRAM_NAME,
  PROGRAM_VENUE,
} from "@/lib/constants";

function formatNgn(n: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
}

export function RegistrationSection() {
  const fee = getProgramFeeNgn();
  const formatted = formatNgn(fee);

  return (
    <MotionSection id="register" className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[480px] max-w-5xl bg-gradient-to-b from-emerald-500/8 via-cyan-500/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{"// enroll"}</span>
          <h2 className="text-fluid-section mt-3 text-balance font-semibold tracking-tight text-[var(--fg-strong)]">
            Pay, join, and you&apos;re in.
          </h2>
          <p className="text-fluid-lead mt-4 text-pretty text-[var(--fg-muted)]">
            Transfer tuition to the school account below. When payment is complete, join the WhatsApp group and share your
            receipt so we can confirm your seat.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="space-y-6">
            <div className="panel panel-accent relative overflow-hidden p-7 sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/10 blur-2xl" aria-hidden />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-card)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    Step 01
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                    Bank transfer
                  </span>
                </div>

                <h3 className="text-fluid-card-title mt-5 font-semibold text-[var(--fg-strong)]">School account</h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">
                  Use your banking app to send the exact tuition amount. Keep your debit alert or receipt handy for the
                  group.
                </p>

                <dl className="mt-8 space-y-5 border-t border-[var(--border)] pt-8">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-subtle)]">
                      Account name
                    </dt>
                    <dd className="mt-1.5 text-lg font-semibold tracking-tight text-[var(--fg-strong)]">
                      {PAYMENT_ACCOUNT_NAME}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-subtle)]">Bank</dt>
                    <dd className="mt-1.5 text-lg font-semibold tracking-tight text-[var(--fg-strong)]">
                      {PAYMENT_BANK_NAME}
                    </dd>
                  </div>
                  {PAYMENT_ACCOUNT_NUMBER ? (
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-subtle)]">
                        Account number
                      </dt>
                      <dd className="mt-1.5 font-mono text-lg font-semibold tabular tracking-tight text-[var(--fg-strong)]">
                        {PAYMENT_ACCOUNT_NUMBER}
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-subtle)]">Tuition</dt>
                    <dd className="text-fluid-price mt-1.5 font-semibold tabular tracking-tight text-[var(--fg-strong)]">
                      {formatted}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 rounded-xl border border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] px-4 py-3">
                  <p className="text-sm font-medium text-[var(--fg-strong)]">Then: WhatsApp</p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    Open the group using the QR code or invite link, and upload your payment receipt there.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">{PROGRAM_NAME}</span>
                <span className="chip">
                  <span className="chip-dot" aria-hidden />
                  <span className="text-[var(--fg)]">Live cohort</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                {PROGRAM_DATES}
                <br />
                {PROGRAM_VENUE}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<Image src="/icons/bolt.svg" alt="" width={22} height={22} />}
                title="Instant confirmation"
                description="Posting your receipt in the group is the fastest way to lock your spot."
              />
              <InfoCard
                icon={<Image src="/icons/layers.svg" alt="" width={22} height={22} />}
                title="Stay in the loop"
                description="Announcements, links, and reminders land in the same WhatsApp space."
              />
            </div>
          </div>

          <WhatsAppEnrollmentPanel />
        </div>
      </div>
    </MotionSection>
  );
}
