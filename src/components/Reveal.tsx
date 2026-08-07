"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Progressive enhancement: content renders fully visible by default (works
// even if JS never loads, e.g. opened directly as a local file where module
// scripts get blocked). Only once React has actually mounted in the browser
// do we opt into the "hidden until scrolled into view" treatment.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [jsReady, setJsReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setJsReady(true);
  }, []);

  useEffect(() => {
    if (!jsReady) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, jsReady]);

  return (
    <div ref={ref} className={`${jsReady ? "reveal" : ""} ${className}`}>
      {children}
    </div>
  );
}
