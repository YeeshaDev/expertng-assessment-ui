import type { Post } from "@/lib/types";
import { PostHeader } from "./post-header";
import { PostMedia } from "./post-media";
import { EngagementBar } from "./engagement-bar";
import { LikedByRow } from "./liked-by-row";
import { PostComments } from "./post-comments";

export function PostCard({
  post,
  hasActiveStory = false,
}: {
  post: Post;
  hasActiveStory?: boolean;
}) {
  return (
    <article className="border-b-8 border-black/10 pb-1 last:border-b-0">
      <PostHeader
        author={post.author}
        timeAgo={post.timeAgo}
        location={post.location}
        hasActiveStory={hasActiveStory}
      />

      {post.text && (
        <p className="px-4 pb-3 text-[14px] leading-relaxed text-foreground">
          {post.text}
        </p>
      )}

      <PostMedia media={post.media} />

      <LikedByRow summary={post.likedBySummary} />

      <EngagementBar postId={post.id} stats={post.stats} />

      <PostComments
        topComment={post.topComment}
        totalComments={post.totalComments}
      />
    </article>
  );
}
