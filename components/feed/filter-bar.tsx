import { SlidersHorizontal, TrendingUp } from "lucide-react";

const FILTERS = [
  { label: "Filters", icon: SlidersHorizontal },
  { label: "Trending Searches", icon: TrendingUp },
];

export function FilterBar() {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto px-4 pb-1">
      {FILTERS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground active:scale-95"
        >
          <Icon className="size-3.5" strokeWidth={2} />
          {label}
        </button>
      ))}
    </div>
  );
}
