"use client";

interface SUSChartProps {
  before: number;
  after: number;
}

export function SUSChart({ before, after }: SUSChartProps) {
  const maxScore = 100;
  const getGrade = (score: number) => {
    if (score >= 80) return { label: "A", color: "text-emerald-400" };
    if (score >= 68) return { label: "B", color: "text-blue-400" };
    if (score >= 51) return { label: "C", color: "text-amber-400" };
    return { label: "D", color: "text-red-400" };
  };

  const beforeGrade = getGrade(before);
  const afterGrade = getGrade(after);

  return (
    <div className="rounded-xl border border-border/50 bg-zinc-900/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
          System Usability Scale
        </h4>
        <span className="text-xs text-muted-foreground">0–100</span>
      </div>
      <div className="space-y-6">
        {before > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Antes</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-zinc-500">{before}</span>
                <span className={`text-xs font-mono ${beforeGrade.color}`}>
                  Grado {beforeGrade.label}
                </span>
              </div>
            </div>
            <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-zinc-600 transition-all duration-1000"
                style={{ width: `${(before / maxScore) * 100}%` }}
              />
            </div>
          </div>
        )}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">
              {before > 0 ? "Después" : "Score final"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{after}</span>
              <span className={`text-xs font-mono ${afterGrade.color}`}>
                Grado {afterGrade.label}
              </span>
            </div>
          </div>
          <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
              style={{ width: `${(after / maxScore) * 100}%` }}
            />
          </div>
        </div>
      </div>
      {before > 0 && (
        <p className="text-xs text-muted-foreground mt-4">
          Mejora de{" "}
          <span className="text-foreground font-medium">
            +{Math.round(((after - before) / before) * 100)}%
          </span>{" "}
          en percepción de usabilidad
        </p>
      )}
    </div>
  );
}
