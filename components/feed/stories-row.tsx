import { stories } from "@/lib/mock-data";
import { StoryAvatar } from "./story-avatar";

export function StoriesRow() {
  return (
    <div className="scrollbar-none flex gap-3.5 overflow-x-auto px-3 py-3">
      {stories.map((story) => (
        <StoryAvatar key={story.id} story={story} />
      ))}
    </div>
  );
}
