import { Icon } from "@iconify/react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-1.5">
          <Icon icon="lucide:map-pinned" className="size-5 text-primary" />
          <span className="text-[17px] font-bold tracking-tight text-foreground">
            Expert Listing
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Messages"
            className="flex size-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <Icon icon="lucide:mail" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Create post"
            className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform hover:brightness-110 active:scale-95"
          >
            <Icon icon="lucide:plus" className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
