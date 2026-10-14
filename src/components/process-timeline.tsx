"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";

const steps = [
  { step: "01", title: "Research", desc: "Entrevistas, heatmaps, análisis heurístico, benchmarking. Entender antes de diseñar." },
  { step: "02", title: "Insights", desc: "Personas, journey maps, hallazgos clave. Convertir datos en direcciones de diseño." },
  { step: "03", title: "Diseño", desc: "Wireframes, prototipos, sistemas de diseño. Iterar con el equipo y los usuarios." },
  { step: "04", title: "Validación", desc: "Tests de usabilidad, métricas SUS, Clarity. Medir el impacto real de cada decisión." },
];

/** Four-step process whose connecting line draws itself as you scroll. */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative grid md:grid-cols-4 gap-10 md:gap-8">
      {/* Vertical line (mobile) */}
      <div className="absolute left-[5px] top-1 bottom-1 w-px bg-zinc-800 md:hidden" />
      <motion.div
        className="absolute left-[5px] top-1 bottom-1 w-px origin-top bg-gradient-to-b from-teal-400 to-violet-400 md:hidden"
        style={{ scaleY: progress }}
      />
      {/* Horizontal line (desktop) */}
      <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-zinc-800 md:block" />
      <motion.div
        className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-gradient-to-r from-teal-400 via-sky-400 to-violet-400 md:block"
        style={{ scaleX: progress }}
      />

      {steps.map((item, i) => (
        <AnimateOnScroll key={item.step} delay={i * 120}>
          <div className="group relative cursor-default pl-8 md:pl-0 md:pt-10">
            <motion.span
              className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-zinc-600 bg-background md:top-0"
              whileInView={{
                backgroundColor: "#5eead4",
                borderColor: "#5eead4",
                scale: [1, 1.8, 1],
              }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            />
            <span className="block text-4xl font-bold text-zinc-800 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-zinc-300">
              {item.step}
            </span>
            <h3 className="mb-2 mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
