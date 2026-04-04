import type { Finding } from "@/lib/case-studies";

const severityConfig = {
  critical: { label: "Crítico", color: "bg-red-500/10 text-red-400 border-red-500/30" },
  high: { label: "Alto", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  medium: { label: "Medio", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  low: { label: "Bajo", color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30" },
};

export function FindingsList({ findings }: { findings: Finding[] }) {
  return (
    <div className="space-y-3">
      {findings.map((finding) => {
        const config = severityConfig[finding.severity];
        return (
          <div
            key={finding.title}
            className="rounded-lg border border-border/50 bg-zinc-900/50 p-4"
          >
            <div className="flex items-start gap-3">
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 mt-0.5 ${config.color}`}
              >
                {config.label}
              </span>
              <div>
                <p className="text-sm font-medium">{finding.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {finding.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
