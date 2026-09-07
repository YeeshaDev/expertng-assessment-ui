import { Icon } from "@iconify/react";

const FILTERS = [
  { label: "Filters", icon: "mage:filter" },
  { label: "Trending Searches", icon: "lucide:trending-up" },
];

export function FilterBar() {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto px-4 pb-1">
      {FILTERS.map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-[13px] font-medium text-secondary-foreground transition-colors hover:border-primary hover:bg-accent/10 hover:text-accent-foreground active:scale-95"
        >
          <Icon icon={icon} className="size-5" />
          {label}
        </button>
      ))}
    </div>
  );
}
