import Image from "next/image";
import { Icon } from "@iconify/react";
import type { PostAuthor } from "@/lib/types";

export function PostHeader({
  author,
  timeAgo,
  location,
}: {
  author: PostAuthor;
  timeAgo: string;
  location: string;
}) {
  return (
    <div className="flex items-start gap-2.5 px-4 py-3">
      <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image
          src={author.avatarUrl}
          alt={author.name}
          fill
          sizes="40px"
          className="object-cover"
        />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-[14px]">
          <span className="truncate font-semibold text-foreground">
            {author.name}
          </span>
          <span className="text-secondary-foreground">·</span>
          <span className="text-secondary-foreground">{author.role}</span>
        </div>
        <div className="flex items-center gap-1 text-[12px] text-secondary-foreground">
          <span>{author.category}</span>
          <span>·</span>
          <span>{timeAgo}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-[12px] text-secondary-foreground">
          <Icon icon="lucide:map-pin" className="size-3" />
          <span className="truncate">{location}</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="More options"
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
      >
        <Icon icon="lucide:more-horizontal" className="size-5" />
      </button>
    </div>
  );
}
