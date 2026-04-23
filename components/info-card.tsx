import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function InfoCard({ icon, title, description, className }: InfoCardProps) {
  return (
    <div className={cn("panel panel-lift p-6", className)}>
      <div
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-300 ring-1 ring-inset ring-white/10"
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mt-5 text-base font-semibold text-[var(--fg-strong)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{description}</p>
    </div>
  );
}
