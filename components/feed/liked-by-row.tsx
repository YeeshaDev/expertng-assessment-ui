import Image from "next/image";

export function LikedByRow({ summary }: { summary?: string }) {
  if (!summary) return null;

  return (
    <div className="flex items-center gap-2 px-4 pt-2.5">
      <Image
        src="/images/group-avatar.png"
        alt=""
        width={60}
        height={20}
        className="h-7 w-auto"
      />
      <p className="truncate text-[12.5px] text-muted-foreground">
        Liked by <span className="font-medium text-foreground">{summary}</span>
      </p>
    </div>
  );
}
