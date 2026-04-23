/** Program fee in NGN (major units). Defaults to ₦10,000 for this workshop. */
export function getProgramFeeNgn(): number {
  const raw = process.env.NEXT_PUBLIC_PROGRAM_FEE_NGN;
  const n = raw ? Number.parseFloat(raw) : 10_000;
  return Number.isFinite(n) && n > 0 ? n : 10_000;
}

export const PROGRAM_NAME =
  process.env.NEXT_PUBLIC_PROGRAM_NAME ??
  "Full-Stack Web Development (No-Code with AI)";

export const PROGRAM_DATES =
  process.env.NEXT_PUBLIC_PROGRAM_DATES ?? "May 8th & 9th, 2026";

export const PROGRAM_VENUE =
  process.env.NEXT_PUBLIC_PROGRAM_VENUE ?? "Google Meet (Online)";

const DEFAULT_EVENT_START_ISO = "2026-05-08T09:00:00+01:00";

/** ISO 8601 start for countdown (WAT). */
export const EVENT_START_ISO =
  process.env.NEXT_PUBLIC_EVENT_START_ISO ?? DEFAULT_EVENT_START_ISO;

/** Milliseconds for countdown; invalid env values fall back so the client never gets NaN. */
export function getEventStartTimestampMs(): number {
  const t = Date.parse(EVENT_START_ISO);
  return Number.isFinite(t) ? t : Date.parse(DEFAULT_EVENT_START_ISO);
}

/** Placeholder — set in .env.local for production. */
export const MEET_INVITE_URL =
  process.env.NEXT_PUBLIC_MEET_INVITE_URL ?? "https://meet.google.com/placeholder-link-replace-me";

export const RECORDING_NOTE =
  "Class recordings are available 3 days after each live session.";

/** Bank transfer — shown on the enrollment section. */
export const PAYMENT_ACCOUNT_NAME = "ADEXBIT LEARNING HUB";

export const PAYMENT_BANK_NAME = "Kuda MFB";

/** Kuda account for tuition transfers. Override with `NEXT_PUBLIC_PAYMENT_ACCOUNT_NUMBER` if needed. */
export const PAYMENT_ACCOUNT_NUMBER = (
  process.env.NEXT_PUBLIC_PAYMENT_ACCOUNT_NUMBER ?? "3003128021"
).trim();

/** WhatsApp community for payment receipts and updates. */
export const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/I8CcZWXHREY6lDuWdWqWfw?mode=gi_t";

export const WHATSAPP_GROUP_LABEL = "Adexbit2.0";
