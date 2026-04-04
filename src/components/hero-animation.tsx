"use client";

import { useEffect, useState, type ReactNode, Children } from "react";

export function HeroAnimation({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const childArray = Children.toArray(children);

  return (
    <>
      {childArray.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 24px, 0)",
            transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + i * 150}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + i * 150}ms`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </>
  );
}
