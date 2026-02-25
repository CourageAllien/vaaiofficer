"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      // Already visible — animate in immediately
      setIsVisible(true);
      setMounted(true);
      return;
    }

    // Not yet visible — mark as mounted (will apply hidden styles)
    // then observe for scroll into view
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  // Before client mount: render normally (SSR-safe, no flash)
  // After client mount: apply animation styles
  const style: React.CSSProperties =
    mounted && !isVisible
      ? {
          opacity: 0,
          transform: "translateY(20px)",
          transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }
      : mounted && isVisible
        ? {
            opacity: 1,
            transform: "translateY(0)",
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
          }
        : {};

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
