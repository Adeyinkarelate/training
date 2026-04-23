"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_CODING_CLIPS } from "@/lib/hero-clips";

export function HeroCodingVideo() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnded = useCallback(() => {
    const len = HERO_CODING_CLIPS.length;
    if (!len) return;
    setIndex((i) => (i + 1) % len);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    if (!prefersReducedMotion) {
      void el.play().catch(() => {});
    }
  }, [index, prefersReducedMotion]);

  const clip = HERO_CODING_CLIPS[index] ?? HERO_CODING_CLIPS[0];
  if (!clip) {
    return null;
  }

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { scale: 1.02, y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/35 via-teal-400/25 to-blue-500/30 opacity-80 blur-md"
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.55, 0.95, 0.55], scale: [1, 1.02, 1] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/40 shadow-2xl shadow-emerald-950/30 ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/80 px-3 py-2">
          <span className="size-2.5 rounded-full bg-red-400/90" aria-hidden />
          <span className="size-2.5 rounded-full bg-amber-400/90" aria-hidden />
          <span className="size-2.5 rounded-full bg-emerald-400/90" aria-hidden />
          <span className="ml-2 truncate text-[11px] font-medium tracking-wide text-slate-400">
            IDE-style workflow · ~1 min
          </span>
        </div>
        <video
          ref={videoRef}
          key={clip.src}
          className="aspect-video w-full object-cover"
          poster={clip.poster}
          playsInline
          muted
          controls
          controlsList="nodownload"
          preload="metadata"
          onEnded={onEnded}
          aria-label="Short montage of people typing and working in a code editor environment (stock video, not a product endorsement)"
        >
          <source src={clip.src} type="video/mp4" />
        </video>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
        Stock footage montage (~1 minute). Replace with your own screen recording for a true VS Code demo.
      </p>
    </motion.div>
  );
}
