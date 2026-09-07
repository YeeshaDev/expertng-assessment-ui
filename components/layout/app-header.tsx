import Image from "next/image";
import { Icon } from "@iconify/react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30  backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex h-14 items-center justify-between px-4">
        <Image
          src="/brand/expert-logo-green.svg"
          alt="Expert Listing"
          width={169}
          height={22}
          priority
          className="h-4.75 w-auto"
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Messages"
            className="flex size-10 border bg-black/2 items-center justify-center rounded-full text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <Icon icon="lucide:mail" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Create post"
            className="flex size-10 border bg-black/2 items-center justify-center rounded-full text-primary-foreground transition-transform hover:brightness-105 active:scale-95"
          >
            <Icon icon="lucide:plus" className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
