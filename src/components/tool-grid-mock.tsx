"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Calculator,
  Code,
  FileText,
  Film,
  Gamepad2,
  Image as ImageIcon,
  MapPin,
  Type,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const categories: { name: string; icon: LucideIcon; example: string }[] = [
  { name: "PDF", icon: FileText, example: "Unir PDF" },
  { name: "Imágenes", icon: ImageIcon, example: "Comprimir imagen" },
  { name: "Video y audio", icon: Film, example: "Recortar audio" },
  { name: "Texto", icon: Type, example: "Contar palabras" },
  { name: "Calculadoras", icon: Calculator, example: "Calcular IVA" },
  { name: "Argentina", icon: MapPin, example: "Calcular aguinaldo" },
  { name: "Desarrollo", icon: Code, example: "Formatear JSON" },
  { name: "Utilidades", icon: Wrench, example: "Generar código QR" },
  { name: "Juegos", icon: Gamepad2, example: "Buscaminas" },
];

/** Decorative mini-browser that cycles through the tool categories. */
export function ToolGridMock({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % categories.length),
      2200
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-xl border border-border/60 bg-background/70 p-3.5 shadow-2xl shadow-black/40 backdrop-blur",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="ml-2 flex-1 truncate rounded-md bg-zinc-800/70 px-2.5 py-0.5 text-[10px] font-mono text-zinc-500">
          herramientas-web.com
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const isActive = i === active;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-lg border px-1.5 py-3 text-center transition-all duration-500",
                isActive
                  ? "-translate-y-0.5 border-teal-400/50 bg-teal-400/10 text-teal-200 shadow-lg shadow-teal-500/10"
                  : "border-border/50 bg-zinc-900/50 text-zinc-500"
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={1.6} />
              <span className="text-[10px] leading-tight">{cat.name}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-lg border border-border/50 bg-zinc-900/60 px-2.5 py-2">
        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            key={active}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal-400 to-sky-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
        </div>
        <div className="relative h-4 w-44 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="absolute inset-0 truncate text-right text-[10px] font-mono text-zinc-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {categories[active].example} · en tu navegador
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
