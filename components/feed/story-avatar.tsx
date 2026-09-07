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
      className="flex w-16 shrink-0 flex-col items-center gap-1.5 outline-none"
    >
      <span
        className={cn(
          "relative flex size-16 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-background transition-transform active:scale-95",
          RING_STYLES[story.ringColor]
        )}
      >
        <span className="relative size-[58px] overflow-hidden rounded-full bg-muted">
          <Image
            src={story.avatarUrl}
            alt={story.name}
            fill
            sizes="58px"
            className="object-cover"
          />
        </span>

        {story.isOwn && (
          <span className="absolute -bottom-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
            <Icon icon="lucide:plus" className="size-3" />
          </span>
        )}
        {story.verified && (
          <span className="absolute -bottom-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-foreground text-background">
            <Icon icon="lucide:shield-check" className="size-3" />
          </span>
        )}
      </span>
      <span className="max-w-16 truncate text-[11px] font-medium text-foreground/80">
        {story.name}
      </span>
    </button>
  );
}
