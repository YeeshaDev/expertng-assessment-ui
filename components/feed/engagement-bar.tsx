"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
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
          <Heart
            className={cn(
              "size-[22px] transition-colors",
              liked ? "fill-red-500 text-red-500" : "hover:text-foreground"
            )}
            strokeWidth={1.75}
          />
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
          <MessageCircle className="size-[22px]" strokeWidth={1.75} />
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
          <Send className="size-[20px]" strokeWidth={1.75} />
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
        <Bookmark
          className={cn(
            "size-[20px] transition-colors",
            saved ? "fill-primary text-primary" : "hover:text-foreground"
          )}
          strokeWidth={1.75}
        />
        {saveCount > 0 && (
          <span className={cn("text-[13px] font-medium", saved && "text-primary")}>
            {saveCount}
          </span>
        )}
      </button>
    </div>
  );
}
