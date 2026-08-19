import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Clock, Users } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SUSChart } from "@/components/sus-chart";
import { PersonaCard } from "@/components/persona-card";
import { JourneyMap } from "@/components/journey-map";
import { FindingsList } from "@/components/findings-list";
import { MetricsGrid } from "@/components/metrics-grid";
import { ImpactBanner } from "@/components/impact-banner";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Not found" };
  return {
    title: `${study.title} — Case Study UX`,
    description: study.summary,
    openGraph: {
      title: `${study.title} — Santiago Israelevich UX Portfolio`,
      description: study.summary,
      images: [`/images/projects/${study.slug}.png`],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50 px-6 md:px-12 lg:px-24 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>
          <span className="text-xs font-mono text-muted-foreground">
            {String(currentIndex + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 md:px-12 lg:px-24 pt-16 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${study.heroColor}`} />
        {/* Background project image */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none">
          <Image
            src={`/images/projects/${study.slug}.png`}
            alt=""
            fill
            className="object-cover object-left-top"
            sizes="50vw"
            aria-hidden="true"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary">{study.role}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {study.duration}
            </span>
            <span className="text-xs text-muted-foreground">{study.year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {study.subtitle}
          </p>
          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
            >
              {study.url}
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <div className="flex flex-wrap gap-2 mt-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Overview */}
          <section>
            <SectionHeader number="00" title="Resumen" />
            <p className="text-muted-foreground leading-relaxed">{study.summary}</p>
          </section>

          {/* Challenge */}
          <section>
            <SectionHeader number="01" title="El desafío" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              {study.challenge}
            </p>
          </section>

          <Separator className="bg-border/30" />

          {/* Research */}
          <section>
            <SectionHeader number="02" title="Investigación" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              {study.research.description}
            </p>

            {/* Methods */}
            <div className="flex flex-wrap gap-2 mb-8">
              {study.research.methods.map((method) => (
                <span
                  key={method}
                  className="text-xs px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground"
                >
                  {method}
                </span>
              ))}
            </div>

            {study.research.participants && (
              <p className="text-xs text-muted-foreground flex items-center gap-2 mb-8">
                <Users className="h-3.5 w-3.5" />
                {study.research.participants}
              </p>
            )}

            {/* Findings */}
            <h3 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
              Hallazgos clave
            </h3>
            <FindingsList findings={study.research.findings} />

            {/* Heatmap description */}
            {study.research.heatmapDescription && (
              <div className="mt-8 rounded-xl border border-border/50 bg-zinc-900/50 p-6">
                <h4 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-3">
                  Heatmaps &mdash; Microsoft Clarity
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.research.heatmapDescription}
                </p>
                {/* Real heatmap image */}
                <div className="mt-4 rounded-lg overflow-hidden relative">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/images/projects/heatmap.png"
                      alt="Heatmap real de Microsoft Clarity mostrando zonas de fricción"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                    />
                    {/* Soft blur on edges */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                      boxShadow: "inset 0 0 40px 20px rgb(24 24 27 / 0.8)"
                    }} />
                  </div>
                  <p className="text-[10px] font-mono text-zinc-500 mt-2 text-center">
                    Heatmap real — Microsoft Clarity
                  </p>
                </div>
              </div>
            )}

            {/* SUS Score */}
            {study.research.susScore && study.research.susScore.after > 0 && (
              <div className="mt-8">
                <SUSChart
                  before={study.research.susScore.before}
                  after={study.research.susScore.after}
                />
              </div>
            )}
          </section>

          <Separator className="bg-border/30" />

          {/* Insights */}
          <section>
            <SectionHeader number="03" title="Insights" />

            {/* Personas */}
            <h3 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
              Personas
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {study.insights.personas.map((persona) => (
                <PersonaCard key={persona.name} persona={persona} />
              ))}
            </div>

            {/* Journey Map */}
            <JourneyMap steps={study.insights.journeyMapSteps} />
          </section>

          <Separator className="bg-border/30" />

          {/* Design */}
          <section>
            <SectionHeader number="04" title="Diseño e iteraciones" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              {study.design.description}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold">{study.design.iterations}</p>
                <p className="text-xs text-muted-foreground mt-1">iteraciones</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-border/30" />
              <div className="text-center">
                <p className="text-3xl font-bold">
                  {study.research.methods.length}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  métodos de research
                </p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-border/30" />
              <div className="text-center">
                <p className="text-3xl font-bold">
                  {study.insights.personas.length + (study.research.participants ? 1 : 0)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  perfiles investigados
                </p>
              </div>
            </div>

            <h3 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
              Decisiones clave de diseño
            </h3>
            <div className="space-y-3">
              {study.design.keyDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-zinc-900/50 p-4"
                >
                  <span className="text-xs font-mono text-zinc-600 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="bg-border/30" />

          {/* Results */}
          <section>
            <SectionHeader number="05" title="Resultados" />

            {/* Impact Banner */}
            {study.results.metrics.some((metric) => metric.improvement) && (
              <div className="mb-8">
                <ImpactBanner
                  stats={study.results.metrics.slice(0, 4).map((m) => {
                    const num = parseInt(m.improvement?.replace(/[^0-9]/g, "") ?? "", 10);
                    return {
                      value: isNaN(num) ? 0 : num,
                      suffix: m.improvement?.startsWith("+") ? "%" : "%",
                      label: m.label,
                    };
                  }).filter((s) => s.value > 0)}
                  accentColor={study.heroColor}
                />
              </div>
            )}

            <MetricsGrid metrics={study.results.metrics} />

            {study.results.testimonial && (
              <blockquote className="mt-8 border-l-2 border-zinc-600 pl-6 py-2">
                <p className="text-lg italic text-muted-foreground">
                  &ldquo;{study.results.testimonial}&rdquo;
                </p>
              </blockquote>
            )}
          </section>

          {/* Next case study */}
          <section className="pt-8">
            <Separator className="bg-border/30 mb-12" />
            <Link
              href={`/case/${nextStudy.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border/50 bg-card hover:border-border transition-all p-8"
            >
              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  Siguiente caso
                </p>
                <p className="text-xl font-bold group-hover:text-foreground transition-colors">
                  {nextStudy.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {nextStudy.subtitle}
                </p>
              </div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <span className="text-xs font-mono text-zinc-600">{number}</span>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
