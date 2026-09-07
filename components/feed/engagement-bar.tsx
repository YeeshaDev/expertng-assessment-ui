"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  BookmarkFilledIcon,
  BookmarkOutlinedIcon,
  HeartFilledIcon,
  HeartOutlinedIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import { formatCount } from "@/lib/format";
import type { Post } from "@/lib/types";

export function EngagementBar({ stats }: { stats: Post["stats"] }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const likeCount = stats.likes + (liked ? 1 : 0);
  const saveCount = stats.saves + (saved ? 1 : 0);

  return (
    <div className="flex items-center justify-between px-4 py-2 text-muted-foreground">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          className="flex items-center gap-1.5 transition-transform active:scale-90"
          aria-pressed={liked}
        >
          {liked ? (
            <HeartFilledIcon
              height="1em"
              className="text-[22px] text-red-500 transition-colors"
            />
          ) : (
            <HeartOutlinedIcon
              height="1em"
              className="text-[22px] text-muted-foreground transition-colors hover:text-foreground"
            />
          )}
          {likeCount > 0 && (
            <span className={cn("text-[13px] font-medium", liked && "text-red-500")}>
              {formatCount(likeCount)}
            </span>
          )}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 transition-transform hover:text-foreground active:scale-90"
        >
          <Icon icon="lucide:message-circle" className="size-[22px]" />
          {stats.comments > 0 && (
            <span className="text-[13px] font-medium">
              {formatCount(stats.comments)}
            </span>
          )}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 transition-transform hover:text-foreground active:scale-90"
        >
          <Icon icon="lucide:send" className="size-[20px]" />
        </button>

        {stats.views > 0 && (
          <span className="text-[13px] font-medium text-muted-foreground">
            {formatCount(stats.views)} Views
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => setSaved((v) => !v)}
        className="flex items-center gap-1.5 transition-transform active:scale-90"
        aria-pressed={saved}
      >
        {saved ? (
          <BookmarkFilledIcon
            height="1em"
            className="text-[20px] text-primary transition-colors"
          />
        ) : (
          <BookmarkOutlinedIcon
            height="1em"
            className="text-[20px] text-muted-foreground transition-colors hover:text-foreground"
          />
        )}
        {saveCount > 0 && (
          <span className={cn("text-[13px] font-medium", saved && "text-primary")}>
            {saveCount}
          </span>
        )}
      </button>
    </div>
  );
}
