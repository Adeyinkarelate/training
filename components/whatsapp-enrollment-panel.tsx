"use client";

import Link from "next/link";
import QRCode from "react-qr-code";
import { WHATSAPP_GROUP_LABEL, WHATSAPP_GROUP_URL } from "@/lib/constants";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppEnrollmentPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-raised)_88%,transparent)] p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)] sm:p-8">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-col items-center text-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900 via-violet-950/80 to-cyan-950/90 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          aria-hidden
        >
          <span className="text-center text-[7px] font-semibold uppercase leading-tight tracking-wide text-white/90">
            Learn full-stack web development
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--fg-strong)]">{WHATSAPP_GROUP_LABEL}</h3>
        <p className="mt-1 text-sm text-[var(--fg-muted)]">WhatsApp group</p>

        <div className="relative mt-8 w-full max-w-[220px] sm:max-w-[260px]">
          <div className="rounded-2xl bg-white p-3 shadow-inner ring-1 ring-black/5">
            <QRCode
              value={WHATSAPP_GROUP_URL}
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-md ring-2 ring-white"
            aria-hidden
          >
            <span className="relative flex items-center justify-center text-[#25D366]">
              <WhatsAppGlyph className="h-7 w-7" />
              <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] text-[9px] font-bold text-white">
                +
              </span>
            </span>
          </div>
        </div>

        <p className="mt-8 max-w-sm text-pretty text-sm leading-relaxed text-[var(--fg-muted)]">
          After you pay, join the group and post your transfer receipt so we can confirm your seat.
        </p>

        <Link
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2 sm:w-auto"
        >
          <WhatsAppGlyph className="h-4 w-4 text-slate-950" />
          Open WhatsApp invite
        </Link>
        <p className="mt-3 break-all font-mono text-[10px] text-[var(--fg-subtle)] opacity-90">
          {WHATSAPP_GROUP_URL}
        </p>
      </div>
    </div>
  );
}
