import Image from "next/image";

export function LikedByRow({ summary }: { summary?: string }) {
  if (!summary) return null;

  const isSingleLiker = !summary.includes(" and ");

  return (
    <section>
    <div className="flex items-center gap-2 px-4 py-2.5">
      <Image
        src={isSingleLiker ? "/images/liked-avatar.png" : "/images/group-avatar.png"}
        alt=""
        width={isSingleLiker ? 72 : 60}
        height={isSingleLiker ? 72 : 20}
        className="h-7 w-auto"
      />
      <p className="truncate text-[15px] text-muted-foreground">
        Liked by <span className="font-medium text-foreground">{summary}</span>
      </p>
    </div>
    <hr className="mx-4 bg-black/10 pt-[0.2px]"/>
    </section>
  );
}
