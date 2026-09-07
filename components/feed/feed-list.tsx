import { posts } from "@/lib/mock-data";
import { PostCard } from "./post-card";
import { EndOfFeed } from "./end-of-feed";

export function FeedList() {
  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} hasActiveStory={index === 0} />
      ))}
      <EndOfFeed />
    </div>
  );
}
