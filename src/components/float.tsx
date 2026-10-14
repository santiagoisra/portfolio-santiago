"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface FloatProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Gentle idle bobbing plus a slight scroll parallax. */
export function Float({ children, className, style }: FloatProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <motion.div className={className} style={{ ...style, y }}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
