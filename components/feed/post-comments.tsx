import type { PostComment } from "@/lib/types";

export function PostComments({
  topComment,
  totalComments,
}: {
  topComment?: PostComment;
  totalComments?: number;
}) {
  if (!topComment) return null;

  return (
    <div className="space-y-1 px-4 pb-3 pt-1">
      <p className="text-sm leading-snug">
        <span className="font-semibold">{topComment.username}</span>{" "}
        {topComment.text}
      </p>
      {!!totalComments && (
        <button
          type="button"
          className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all {totalComments} comments
        </button>
      )}
    </div>
  );
}
