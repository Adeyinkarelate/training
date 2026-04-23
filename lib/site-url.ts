/** Used for `metadataBase` and Open Graph. Must never throw — invalid env would blank the whole app. */
const FALLBACK = "http://localhost:3000";

export function resolveSiteMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return new URL(FALLBACK);
  }
  try {
    return new URL(raw);
  } catch {
    return new URL(FALLBACK);
  }
}
