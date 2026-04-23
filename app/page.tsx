import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { MobileRegisterFab } from "@/components/mobile-register-fab";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function SectionFallback() {
  return (
    <div className="mx-auto mt-24 h-40 max-w-6xl animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] px-4 sm:px-6" />
  );
}

const ProgramOverview = dynamic(
  () => import("@/components/program-overview").then((m) => m.ProgramOverview),
  { loading: () => <SectionFallback /> },
);

const EventHighlights = dynamic(
  () => import("@/components/event-highlights").then((m) => m.EventHighlights),
  { loading: () => <SectionFallback /> },
);

const Testimonials = dynamic(
  () => import("@/components/testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionFallback /> },
);

const Faq = dynamic(() => import("@/components/faq").then((m) => m.Faq), {
  loading: () => <SectionFallback />,
});

const RegistrationSection = dynamic(
  () => import("@/components/registration-section").then((m) => m.RegistrationSection),
  { loading: () => <SectionFallback /> },
);

export default function Home() {
  return (
    <div className="relative min-h-screen min-w-0 bg-[var(--bg)]">
      <SiteHeader />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <Hero />
        <ProgramOverview />
        <EventHighlights />
        <Testimonials />
        <Faq />
        <RegistrationSection />
      </main>
      <SiteFooter />
      <MobileRegisterFab />
    </div>
  );
}
