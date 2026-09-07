import Image from "next/image";
import { currentUser } from "@/lib/mock-data";

export function ComposerBar() {
  return (
    <div className="px-4 py-2">
      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-full bg-muted px-3 py-2.5 text-left transition-colors hover:bg-border/60 active:scale-[0.99]"
      >
        <span className="relative size-8 shrink-0 overflow-hidden rounded-full bg-border">
          <Image
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            fill
            sizes="32px"
            className="object-cover"
          />
        </span>
        <span className="truncate text-[14px] text-muted-foreground">
          Share a property, request or say something...
        </span>
      </button>
    </div>
  );
}
