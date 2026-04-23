# Training workshop landing (Next.js)

A production-ready registration flow for a live online workshop. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, React Hook Form, and EmailJS.

## Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

## Setup

1. **Clone or copy** this project and install dependencies:

   ```bash
   npm install
   ```

2. **Environment variables** — copy `.env.example` to `.env.local` and fill in the values:

   | Variable | Purpose |
   |----------|---------|
   | `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in metadata) |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template for registration notices |

   Optional overrides: `NEXT_PUBLIC_PROGRAM_NAME`, `NEXT_PUBLIC_PROGRAM_DATES`, `NEXT_PUBLIC_PROGRAM_VENUE`, `NEXT_PUBLIC_PROGRAM_FEE_NGN`, `NEXT_PUBLIC_EVENT_START_ISO`, `NEXT_PUBLIC_MEET_INVITE_URL`.

3. **Run locally:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com) and set the same environment variables (use **Production** and **Preview** as needed).
3. Deploy. The included `vercel.json` pins the Next.js framework defaults.

### EmailJS behavior

- If EmailJS keys are missing, registration still saves a local backup in the browser and the payload is logged in the console during development.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server locally
- `npm run lint` — ESLint

## Project structure (high level)

- `app/` — App Router pages, layout, global styles
- `components/` — UI (Hero, InfoCard, RegistrationForm, etc.)
- `hooks/` — Email sending, scroll reveal
- `lib/` — Schema (Zod), EmailJS helpers, retry utilities, constants

## License

Private / use as needed for your event.
