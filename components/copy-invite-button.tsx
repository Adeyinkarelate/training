"use client";

import toast from "react-hot-toast";
import { MEET_INVITE_URL } from "@/lib/constants";

export function CopyInviteButton() {
  async function copy() {
    try {
      await navigator.clipboard.writeText(MEET_INVITE_URL);
      toast.success("Link copied — paste it into your calendar or share.");
    } catch {
      toast.error("Could not copy — select the link manually or check browser permissions.");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-sm font-medium text-[var(--fg)] transition hover:border-[var(--border-accent)] hover:bg-cyan-400/10 hover:text-cyan-200"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      Copy invite link
    </button>
  );
}
