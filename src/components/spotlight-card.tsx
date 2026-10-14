"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. 0 disables tilting and keeps only the glow. */
  tilt?: number;
  /** CSS color of the cursor-following glow. */
  glow?: string;
}

/** Wrapper that adds a cursor-following glow and a subtle 3D tilt on hover. */
export function SpotlightCard({
  children,
  className,
  tilt = 3,
  glow = "rgba(255, 255, 255, 0.07)",
}: SpotlightCardProps) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const nx = useMotionValue(0.5);
  const ny = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(ny, [0, 1], [tilt, -tilt]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(nx, [0, 1], [-tilt, tilt]), {
    stiffness: 200,
    damping: 20,
  });
  const background = useMotionTemplate`radial-gradient(420px circle at ${px}px ${py}px, ${glow}, transparent 70%)`;

  return (
    <motion.div
      className={cn("group/spot relative rounded-xl", className)}
      style={reduce || !tilt ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        px.set(e.clientX - rect.left);
        py.set(e.clientY - rect.top);
        nx.set((e.clientX - rect.left) / rect.width);
        ny.set((e.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        nx.set(0.5);
        ny.set(0.5);
      }}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background }}
      />
    </motion.div>
  );
}
