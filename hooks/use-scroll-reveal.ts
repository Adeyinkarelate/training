"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type ScrollRevealOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

/**
 * Intersection Observer–based visibility for scroll animations.
 * Uses layout effect to avoid hiding content that is already in the viewport on load.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const inViewOnLoad = rect.top < vh * 0.92 && rect.bottom > 0;
    setIsVisible(inViewOnLoad);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            obs.disconnect();
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      { rootMargin: options.rootMargin ?? "0px 0px -8% 0px", threshold: options.threshold ?? 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options.once, options.rootMargin, options.threshold]);

  return { ref, isVisible };
}
