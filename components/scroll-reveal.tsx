"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/cn";

/** Optional scroll-in wrapper (Intersection Observer). Safe for SSR: in-view content stays visible on first paint. */
export function ScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
