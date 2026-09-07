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

const POP_EASE = "ease-[cubic-bezier(0.34,1.56,0.64,1)]";

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
          className="group flex items-center gap-1.5 transition-transform active:scale-95"
          aria-pressed={liked}
        >
          <span className="relative inline-block size-5.5">
            <HeartOutlinedIcon
              height="1em"
              className={cn(
                "absolute inset-0 text-[22px] text-muted-foreground transition-all duration-200 group-hover:text-foreground",
                POP_EASE,
                liked ? "scale-50 opacity-0" : "scale-100 opacity-100"
              )}
            />
            <HeartFilledIcon
              height="1em"
              className={cn(
                "absolute inset-0 text-[22px] text-red-500 transition-all duration-200",
                POP_EASE,
                liked ? "scale-100 opacity-100" : "scale-50 opacity-0"
              )}
            />
          </span>
          {likeCount > 0 && (
            <span className={cn("text-[13px] font-medium transition-colors", liked && "text-red-500")}>
              {formatCount(likeCount)}
            </span>
          )}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 transition-transform hover:text-foreground active:scale-95"
        >
          <Icon icon="lucide:message-circle" className="size-5.5" />
          {stats.comments > 0 && (
            <span className="text-[13px] font-medium">
              {formatCount(stats.comments)}
            </span>
          )}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 transition-transform hover:text-foreground active:scale-95"
        >
          <Icon icon="lucide:send" className="size-5" />
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
        className="group flex items-center gap-1.5 transition-transform active:scale-95"
        aria-pressed={saved}
      >
        <span className="relative inline-block size-5">
          <BookmarkOutlinedIcon
            height="1em"
            className={cn(
              "absolute inset-0 text-[20px] text-muted-foreground transition-all duration-200 group-hover:text-accent-foreground",
              POP_EASE,
              saved ? "scale-50 opacity-0" : "scale-100 opacity-100"
            )}
          />
          <BookmarkFilledIcon
            height="1em"
            className={cn(
              "absolute inset-0 text-[20px] text-accent-foreground transition-all duration-200",
              POP_EASE,
              saved ? "scale-100 opacity-100" : "scale-50 opacity-0"
            )}
          />
        </span>
        {saveCount > 0 && (
          <span className={cn("text-[13px] font-medium transition-colors", saved && "text-accent-foreground")}>
            {saveCount}
          </span>
        )}
      </button>
    </div>
  );
}
