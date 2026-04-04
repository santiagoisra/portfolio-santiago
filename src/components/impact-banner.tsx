"use client";

import { AnimatedCounter } from "./animated-counter";

interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

interface ImpactBannerProps {
  stats: ImpactStat[];
  accentColor?: string;
}

export function ImpactBanner({ stats, accentColor = "from-blue-500/20 to-cyan-400/10" }: ImpactBannerProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-border/30 bg-gradient-to-br ${accentColor}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative px-8 py-10">
        <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-8">
          Impacto medible
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
