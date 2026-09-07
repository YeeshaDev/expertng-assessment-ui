import { MapPinned, Mail, Plus } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-1.5">
          <MapPinned className="size-5 text-primary" strokeWidth={2.5} />
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
            <Mail className="size-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Create post"
            className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform hover:brightness-110 active:scale-95"
          >
            <Plus className="size-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </header>
  );
}
