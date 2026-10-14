import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

/** Infinite, pausable CSS marquee. Content is duplicated for a seamless loop. */
export function Marquee({ items, reverse = false, className }: MarqueeProps) {
  return (
    <div
      className={cn("marquee group relative flex overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "animate-marquee flex shrink-0 items-center gap-10 pr-10",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-200"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
