import { posts } from "@/lib/mock-data";
import { PostCard } from "./post-card";
import { EndOfFeed } from "./end-of-feed";

export function FeedList() {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <EndOfFeed />
    </div>
  );
}
