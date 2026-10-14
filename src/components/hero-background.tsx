"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Animated hero backdrop: drifting aurora orbs, a grid that fades out from
 * the cursor, and a soft spotlight that follows the pointer. It listens on its
 * parent element so the hero content stays fully interactive.
 */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 140, damping: 22 });
  const sy = useSpring(y, { stiffness: 140, damping: 22 });

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(125, 211, 252, 0.11), transparent 70%)`;
  const gridMask = useMotionTemplate`radial-gradient(380px circle at ${sx}px ${sy}px, black, transparent 75%)`;

  const { scrollY } = useScroll();
  const orbShift = useTransform(scrollY, [0, 700], [0, 140]);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = parent.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    const onLeave = () => {
      x.set(-1000);
      y.set(-1000);
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Aurora orbs */}
      <motion.div style={{ y: orbShift }} className="absolute inset-0">
        <div className="animate-aurora-a absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-teal-500/20 blur-3xl" />
        <div className="animate-aurora-b absolute right-[-10rem] top-[-6rem] h-[38rem] w-[38rem] rounded-full bg-violet-600/15 blur-3xl" />
        <div className="animate-aurora-c absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-3xl" />
      </motion.div>

      {/* Static faint grid + cursor-revealed bright grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-30"
        style={{ maskImage: gridMask, WebkitMaskImage: gridMask }}
      >
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </motion.svg>

      <motion.div className="absolute inset-0" style={{ background: spotlight }} />

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
