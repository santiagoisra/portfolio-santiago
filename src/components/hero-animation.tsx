"use client";

import { motion } from "framer-motion";
import { Children, type ReactNode } from "react";

export function HeroAnimation({ children }: { children: ReactNode }) {
  return (
    <>
      {Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 + i * 0.15,
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
