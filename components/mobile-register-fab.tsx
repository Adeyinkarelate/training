"use client";

export function MobileRegisterFab() {
  return (
    <a
      href="#register"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-12px_rgba(34,211,238,0.55)] transition hover:brightness-110 active:scale-[0.97] md:hidden"
      aria-label="Jump to payment and WhatsApp enrollment"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Pay &amp; join
    </a>
  );
}
