import Image from "next/image";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import type { PostAuthor } from "@/lib/types";

export function PostHeader({
  author,
  timeAgo,
  location,
  hasActiveStory = false,
}: {
  author: PostAuthor;
  timeAgo: string;
  location: string;
  hasActiveStory?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5 px-4 py-3 bg-background">
      <span
        className={cn(
          "relative size-16 shrink-0 overflow-hidden rounded-full",
          hasActiveStory &&
            "ring-3 ring-primary ring-offset-0.5 ring-offset-background"
        )}
      >
        <Image
          src={author.avatarUrl}
          alt={author.name}
          fill
          sizes="60px"
          className="object-cover"
        />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-base">
          <span className="truncate font-semibold text-foreground">
            {author.name}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-body-sm">{author.role}</span>
        </div>
        <div className="flex items-center gap-1 text-body-sm text-muted-foreground">
          <span>{author.category}</span>
          <span>·</span>
          <span>{timeAgo}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-body-sm text-secondary-foreground">
          <Icon icon="lucide:map-pin" className="size-3" />
          <span className="truncate">{location}</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="More options"
        className="flex size-8 shrink-0 items-center justify-center rounded-full  transition-colors hover:bg-muted hover:text-foreground active:scale-95"
      >
        <Icon icon="lucide:more-horizontal" className="size-6" />
      </button>
    </div>
  );
}
