import type { Persona } from "@/lib/case-studies";
import { Badge } from "@/components/ui/badge";

const techColors = {
  bajo: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  medio: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  alto: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="rounded-xl border border-border/50 bg-zinc-900/50 p-6 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-bold">
              {persona.name[0]}
            </div>
            <div>
              <p className="font-semibold text-sm">{persona.name}, {persona.age}</p>
              <p className="text-xs text-muted-foreground">{persona.occupation}</p>
            </div>
          </div>
        </div>
        <Badge variant="outline" className={`text-[10px] ${techColors[persona.techLevel]}`}>
          Tech: {persona.techLevel}
        </Badge>
      </div>

      <blockquote className="text-sm italic text-muted-foreground border-l-2 border-zinc-700 pl-3">
        &ldquo;{persona.quote}&rdquo;
      </blockquote>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-2">
            Objetivos
          </p>
          <ul className="space-y-1">
            {persona.goals.map((g) => (
              <li key={g} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">+</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-2">
            Frustraciones
          </p>
          <ul className="space-y-1">
            {persona.frustrations.map((f) => (
              <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <span className="text-red-500 mt-0.5 shrink-0">-</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
