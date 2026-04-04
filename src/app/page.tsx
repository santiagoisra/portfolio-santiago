import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { secondaryProjects } from "@/lib/secondary-projects";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { HeroAnimation } from "@/components/hero-animation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <header className="relative px-6 pt-0 pb-36 md:px-12 lg:px-24 overflow-hidden min-h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-background to-zinc-950" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Profile photo — infinite drop from top, aligned to content max-w */}
        <div className="hidden md:block absolute top-0 right-0 z-10" style={{ width: "220px", marginRight: "calc((100vw - 64rem) / 2)" }}>
          <div className="relative" style={{ marginTop: "-200px", paddingTop: "200px" }}>
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "0 0 999px 999px",
                height: "500px",
                border: "2px solid rgba(113, 113, 122, 0.35)",
                borderTop: "none",
              }}
            >
              {/* Image positioned at bottom half of the drop */}
              <div className="absolute bottom-0 left-0 right-0 h-[340px]">
                <Image
                  src="/images/santiago.png"
                  alt="Santiago Israelevich"
                  fill
                  className="object-cover object-top"
                  sizes="220px"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="absolute -inset-8 bottom-0 rounded-b-full bg-gradient-to-b from-transparent to-zinc-400/8 blur-3xl -z-10" />
        </div>

        <div className="relative max-w-5xl mx-auto w-full mt-8 md:mt-24">
          <HeroAnimation>
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6">
              Portfolio UX
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.9] mb-8">
              Santiago
              <br />
              <span className="text-muted-foreground">Israelevich</span>
            </h1>
            <div className="max-w-xl mt-8">
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                UX Lead con foco en{" "}
                <span className="text-foreground font-medium">
                  investigación, diseño de interacción y sistemas de diseño
                </span>
                . Transformo problemas complejos en experiencias claras a través
                de datos, iteración y empatía con el usuario.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <a
                href="mailto:santiagoisra@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                santiagoisra@gmail.com
              </a>
              <span className="text-zinc-700">|</span>
              <a
                href="https://www.linkedin.com/in/santiagoisra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </HeroAnimation>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
        </div>
      </header>

      {/* Case Studies */}
      <main className="px-6 md:px-12 lg:px-24 -mt-16">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">
              Case Studies
            </p>
          </AnimateOnScroll>
          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <AnimateOnScroll key={study.slug} delay={index * 100}>
                <Link
                  href={`/case/${study.slug}`}
                  className="group relative block overflow-hidden rounded-xl border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/30 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${study.heroColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute right-0 top-0 h-full w-2/5 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none">
                    <Image
                      src={`/images/projects/${study.slug}.png`}
                      alt=""
                      fill
                      className="object-cover object-left-top"
                      sizes="40vw"
                      aria-hidden="true"
                      unoptimized
                    />
                  </div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-mono text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {study.role}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {study.year}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-foreground transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
                          {study.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {study.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                        Ver caso
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </main>

      {/* Secondary Projects */}
      <section className="px-6 md:px-12 lg:px-24 py-28">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
              Otros proyectos
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryProjects.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 60}>
                <div className="group rounded-lg border border-border/30 bg-zinc-900/30 p-5 hover:border-border/60 hover:bg-zinc-900/50 transition-all cursor-default h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">{project.title}</h3>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/50 text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-24 py-28 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-12">
              Proceso
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research", desc: "Entrevistas, heatmaps, análisis heurístico, benchmarking. Entender antes de diseñar." },
              { step: "02", title: "Insights", desc: "Personas, journey maps, hallazgos clave. Convertir datos en direcciones de diseño." },
              { step: "03", title: "Diseño", desc: "Wireframes, prototipos, sistemas de diseño. Iterar con el equipo y los usuarios." },
              { step: "04", title: "Validación", desc: "Tests de usabilidad, métricas SUS, Clarity. Medir el impacto real de cada decisión." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 120}>
                <div className="group cursor-default">
                  <span className="text-4xl font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors duration-300">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm font-medium">Santiago Israelevich</p>
            <p className="text-xs text-muted-foreground">
              UX Lead &middot; Buenos Aires, Argentina
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:santiagoisra@gmail.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/santiagoisra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://efectod.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              efectod.com.ar
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
