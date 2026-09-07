import Image from "next/image";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import type { StoryUser } from "@/lib/types";

const RING_STYLES: Record<StoryUser["ringColor"], string> = {
  muted: "ring-border",
  dark: "ring-foreground/70",
  primary: "ring-primary",
};

export function StoryAvatar({ story }: { story: StoryUser }) {
  return (
    <button
      type="button"
      className="flex w-16 shrink-0 flex-col items-center gap-2 outline-none"
    >
      <span
        className={cn(
          "relative flex size-16 items-center justify-center rounded-full ring-3 ring-offset ring-offset-background transition-transform active:scale-95",
          RING_STYLES[story.ringColor]
        )}
      >
        <span className="relative size-15 overflow-hidden rounded-full bg-muted">
          <Image
            src={story.avatarUrl}
            alt={story.name}
            fill
            sizes="60px"
            className="object-cover object-top"
          />
        </span>

        {story.isOwn && (
          <span className="absolute -bottom-2 -right-1 flex size-7 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
            <Icon icon="lucide:plus" className="size-4" />
          </span>
        )}
        
      </span>
      <span className="max-w-16 truncate text-sm font-medium text-secondary-foreground">
        {story.name}
      </span>
    </button>
  );
}
