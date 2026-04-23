"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Syntax-highlighted, code-editor–styled hero visual. Pure CSS/SVG — no runtime
 * syntax highlighter dependency. Tokens are hand-colored spans to keep the
 * bundle lean and the render instant.
 */

const lineNumbers = Array.from({ length: 14 }, (_, i) => i + 1);

const statusItems = [
  { label: "main", icon: "branch" },
  { label: "0 errors", icon: "check" },
  { label: "AI copilot", icon: "spark" },
];

export function HeroCodePreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.3 } }
      }
    >
      <div className="code-preview-glow" aria-hidden />
      <div className="code-preview">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" aria-hidden />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400">
            <FileIcon />
            <span className="font-mono">app/page.tsx</span>
          </div>
          <div className="hidden items-center gap-1.5 text-slate-500 sm:flex">
            <AiBadge />
          </div>
        </div>

        {/* Tab strip */}
        <div className="flex min-h-[2.25rem] items-center overflow-x-auto overflow-y-hidden border-b border-white/5 bg-white/[0.02] text-[11px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-2 border-b-2 border-cyan-400 bg-white/[0.03] px-3 py-1.5 font-mono text-slate-200">
            <span className="text-cyan-400">●</span>
            <span>page.tsx</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 font-mono text-slate-500">
            <span>layout.tsx</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 font-mono text-slate-500">
            <span>globals.css</span>
          </div>
        </div>

        {/* Code body */}
        <div className="flex text-[12.5px] leading-[1.65] sm:text-[13px]">
          <div
            className="select-none border-r border-white/5 px-3 py-4 text-right font-mono text-slate-600"
            aria-hidden
          >
            {lineNumbers.map((n) => (
              <div key={n}>{n}</div>
            ))}
          </div>

          <pre className="flex-1 overflow-x-auto px-4 py-4 font-mono text-slate-200">
            <code>
              <Line>
                <Kw>import</Kw> <Var>{"{ Hero, Button }"}</Var> <Kw>from</Kw>{" "}
                <Str>{'"@stack/ui"'}</Str>
                <Pun>;</Pun>
              </Line>
              <Line>
                <Kw>import</Kw> <Var>{"{ deploy }"}</Var> <Kw>from</Kw>{" "}
                <Str>{'"@ai/cloud"'}</Str>
                <Pun>;</Pun>
              </Line>
              <Line>&nbsp;</Line>
              <Line>
                <Com>{"// ship production sites in 48 hours — no boilerplate"}</Com>
              </Line>
              <Line>
                <Kw>export default function</Kw> <Fn>Page</Fn>
                <Pun>() {"{"}</Pun>
              </Line>
              <Line indent={1}>
                <Kw>return</Kw> <Pun>(</Pun>
              </Line>
              <Line indent={2}>
                <Tag>&lt;Hero</Tag>{" "}
                <Prop>title</Prop>
                <Pun>=</Pun>
                <Str>{'"Build without friction"'}</Str>
              </Line>
              <Line indent={3}>
                <Prop>accent</Prop>
                <Pun>=</Pun>
                <Str>{'"cyan-violet"'}</Str>
                <Tag>&gt;</Tag>
              </Line>
              <Line indent={3}>
                <Tag>&lt;Button</Tag>{" "}
                <Prop>onClick</Prop>
                <Pun>={"{"}</Pun>
                <Fn>deploy</Fn>
                <Pun>{"}"}&gt;</Pun>
              </Line>
              <Line indent={4}>
                Launch app <Caret />
              </Line>
              <Line indent={3}>
                <Tag>&lt;/Button&gt;</Tag>
              </Line>
              <Line indent={2}>
                <Tag>&lt;/Hero&gt;</Tag>
              </Line>
              <Line indent={1}>
                <Pun>);</Pun>
              </Line>
              <Line>
                <Pun>{"}"}</Pun>
              </Line>
            </code>
          </pre>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/5 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 px-3 py-1.5 font-mono text-[10.5px] text-slate-400">
          <div className="flex items-center gap-3">
            {statusItems.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <StatusIcon kind={item.icon as "branch" | "check" | "spark"} />
                {item.label}
              </span>
            ))}
          </div>
          <span className="hidden sm:inline">Ln 10, Col 22 · UTF-8 · TSX</span>
        </div>
      </div>

      {/* Floating decoration */}
      <div
        className="pointer-events-none absolute -left-6 top-12 hidden rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-cyan-300 shadow-xl backdrop-blur lg:block"
        aria-hidden
      >
        $ <span className="text-slate-200">npm run deploy</span>{" "}
        <span className="text-emerald-400">✓</span>
      </div>
      <div
        className="pointer-events-none absolute -right-3 bottom-10 hidden rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-violet-300 shadow-xl backdrop-blur lg:block"
        aria-hidden
      >
        <span className="text-slate-400">ai:</span> generated landing in{" "}
        <span className="text-white">12s</span>
      </div>
    </motion.div>
  );
}

/* ---------------- Token primitives ---------------- */

function Line({
  children,
  indent = 0,
}: {
  children: React.ReactNode;
  indent?: number;
}) {
  return (
    <div style={{ paddingLeft: indent * 16 }} className="whitespace-pre">
      {children}
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-violet-400">{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-300">{children}</span>;
}
function Var({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-300">{children}</span>;
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-amber-300">{children}</span>;
}
function Com({ children }: { children: React.ReactNode }) {
  return <span className="text-slate-500 italic">{children}</span>;
}
function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-rose-300">{children}</span>;
}
function Prop({ children }: { children: React.ReactNode }) {
  return <span className="text-cyan-300">{children}</span>;
}
function Pun({ children }: { children: React.ReactNode }) {
  return <span className="text-slate-400">{children}</span>;
}
function Caret() {
  return <span className="caret" aria-hidden />;
}

/* ---------------- Icons ---------------- */

function FileIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AiBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z" />
      </svg>
      AI
    </span>
  );
}

function StatusIcon({ kind }: { kind: "branch" | "check" | "spark" }) {
  if (kind === "branch") {
    return (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="9" r="2" />
        <path d="M6 8v8M8 9h4a4 4 0 0 1 4 4v0" />
      </svg>
    );
  }
  if (kind === "check") {
    return (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" aria-hidden>
        <path d="M5 12l5 5L20 7" />
      </svg>
    );
  }
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#a78bfa" aria-hidden>
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z" />
    </svg>
  );
}
