import Image from "next/image";

export function LikedByRow({
  avatars,
  summary,
}: {
  avatars: string[];
  summary?: string;
}) {
  if (!summary || avatars.length === 0) return null;

  return (
    <div className="flex items-center gap-2 px-4 pt-2.5">
      <div className="flex -space-x-2">
        {avatars.slice(0, 3).map((src, i) => (
          <span
            key={src + i}
            className="relative size-5 overflow-hidden rounded-full ring-2 ring-background"
          >
            <Image src={src} alt="" fill sizes="20px" className="object-cover" />
          </span>
        ))}
      </div>
      <p className="truncate text-[12.5px] text-muted-foreground">
        Liked by <span className="font-medium text-foreground">{summary}</span>
      </p>
    </div>
  );
}
