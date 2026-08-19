import type { Metric } from "@/lib/case-studies";

export function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-xl border border-border/50 bg-zinc-900/50 p-5 flex flex-col justify-between"
        >
          <p className="text-xs text-muted-foreground mb-4">{metric.label}</p>
          <div className="flex items-end justify-between gap-4">
            <div className="flex items-baseline gap-2">
              {metric.before && (
                <span className="text-xs text-zinc-500 line-through">{metric.before}</span>
              )}
              <span className="text-xl font-bold">{metric.after}</span>
            </div>
            {metric.improvement && (
              <span className="text-sm font-mono font-bold text-emerald-400">
                {metric.improvement}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
