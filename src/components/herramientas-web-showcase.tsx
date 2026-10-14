"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Calculator,
  Code,
  FileText,
  Film,
  Gamepad2,
  Image as ImageIcon,
  MapPin,
  ShieldCheck,
  Type,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "./animated-counter";
import { SpotlightCard } from "./spotlight-card";

const SITE_URL = "https://herramientas-web.com";

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

const stats = [
  { end: 150, suffix: "+", label: "herramientas" },
  { end: 9, suffix: "", label: "categorías" },
  { end: 0, suffix: "", label: "archivos subidos" },
];

const stack = ["Astro", "Preact", "TypeScript", "Cloudflare Pages", "Playwright"];

export function HerramientasWebShowcase() {
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

  const current = categories[active];

  return (
    <SpotlightCard
      tilt={1.5}
      glow="rgba(94, 234, 212, 0.09)"
      className="overflow-hidden border border-border/50 bg-card hover:border-teal-400/30 transition-colors duration-500"
    >
      {/* Rotating conic border glow */}
      <div aria-hidden="true" className="hw-border pointer-events-none absolute -inset-px rounded-[inherit]" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-violet-500/10" />

      <div className="relative grid gap-10 p-8 md:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Copy */}
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-2.5 py-1 text-xs text-teal-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-300" />
              </span>
              En desarrollo
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Producto propio · 2026
            </span>
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Herramientas Web
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
            Plataforma gratuita con más de 150 herramientas para el día a día:
            PDF, imágenes, video y audio, texto, calculadoras, utilidades para
            Argentina, desarrollo y juegos. Todo corre en el navegador: los
            archivos nunca se suben a ningún servidor, sin registro, sin
            captchas y sin esperas artificiales.
          </p>
          <p className="mt-3 flex max-w-lg items-start gap-2 text-sm leading-relaxed text-zinc-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-300/80" />
            Diseño sobrio, mobile first y accesible, pensado como el
            contrapunto de los sitios de utilidades saturados de colores y
            publicidad.
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-border/40 py-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight md:text-3xl">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-zinc-700/30 bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95"
          >
            Visitar herramientas-web.com
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
          </a>
        </div>

        {/* Animated mock of the tool grid */}
        <div
          className="relative self-center rounded-xl border border-border/60 bg-background/70 p-4 shadow-2xl shadow-black/40 backdrop-blur"
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="ml-3 flex-1 truncate rounded-md bg-zinc-800/70 px-3 py-1 text-[11px] font-mono text-zinc-500">
              herramientas-web.com
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = i === active;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col items-center gap-2 rounded-lg border px-2 py-4 text-center transition-all duration-500 ${
                    isActive
                      ? "-translate-y-0.5 border-teal-400/50 bg-teal-400/10 text-teal-200 shadow-lg shadow-teal-500/10"
                      : "border-border/50 bg-zinc-900/50 text-zinc-500"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                  <span className="text-[11px] leading-tight">{cat.name}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-lg border border-border/50 bg-zinc-900/60 px-3 py-2.5">
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                key={active}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal-400 to-sky-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </div>
            <div className="relative h-4 w-40 overflow-hidden text-right">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  className="absolute inset-0 truncate text-[11px] font-mono text-zinc-400"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {current.example} · en tu navegador
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
