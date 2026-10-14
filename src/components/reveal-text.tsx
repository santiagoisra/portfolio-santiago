"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  /** Delay in seconds before the first letter appears. */
  delay?: number;
}

/** Letter-by-letter rise-up reveal. Exposes the full text to screen readers. */
export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.04,
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
