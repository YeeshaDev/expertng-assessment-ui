import type { Post } from "@/lib/types";
import { PostHeader } from "./post-header";
import { PostMedia } from "./post-media";
import { EngagementBar } from "./engagement-bar";
import { LikedByRow } from "./liked-by-row";
import { PostComments } from "./post-comments";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="border-b-8 border-muted bg-card pb-1 last:border-b-0">
      <PostHeader
        author={post.author}
        timeAgo={post.timeAgo}
        location={post.location}
      />

      {post.text && (
        <p className="px-4 pb-3 text-[14px] leading-relaxed text-foreground/90">
          {post.text}
        </p>
      )}

      <PostMedia media={post.media} />

      <LikedByRow avatars={post.likedByAvatars} summary={post.likedBySummary} />

      <EngagementBar stats={post.stats} />

      <PostComments
        topComment={post.topComment}
        totalComments={post.totalComments}
      />
    </article>
  );
}
