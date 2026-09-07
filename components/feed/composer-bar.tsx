"use client";

import { useState } from "react";
import Image from "next/image";
import { currentUser } from "@/lib/mock-data";

export function ComposerBar() {
  const [value, setValue] = useState("");

  return (
    <div className="px-4 py-2">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setValue("");
        }}
        className="flex w-full items-center gap-3 rounded-full bg-black/2 px-1 py-2.5 transition-colors focus-within:bg-border/60"
      >
        <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-border">
          <Image
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            fill
            sizes="38px"
            className="object-cover"
          />
        </span>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Share a property, request or say something..."
          className="min-w-0 flex-1 bg-transparent text-[14px] text-foreground outline-none placeholder:text-muted-foreground"
        />
      </form>
    </div>
  );
}
