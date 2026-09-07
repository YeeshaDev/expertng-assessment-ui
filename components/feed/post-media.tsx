"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PostMedia as PostMediaType } from "@/lib/types";

function MediaTag({ label }: { label: "For Rent" | "For Sale" }) {
  return (
    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
      <Tag className="size-3" strokeWidth={2.5} />
      {label}
    </span>
  );
}

function VideoPost({
  media,
}: {
  media: Extract<PostMediaType, { type: "video" }>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowControls(false);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  return (
    <div
      className="group relative aspect-[4/3] w-full overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={media.src}
        poster={media.poster}
        playsInline
        loop
        className="size-full object-cover"
        onClick={togglePlayback}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
      />

      {media.tag && <MediaTag label={media.tag} />}

      {!isPlaying && (
        <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
          {media.duration}
        </span>
      )}

      <button
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlayback}
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity",
          !showControls && "opacity-0"
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95">
          {isPlaying ? (
            <Pause className="size-6 fill-current" />
          ) : (
            <Play className="ml-0.5 size-6 fill-current" />
          )}
        </span>
      </button>
    </div>
  );
}

export function PostMedia({ media }: { media: PostMediaType }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (media.type === "none") return null;

  if (media.type === "video") {
    return <VideoPost media={media} />;
  }

  const { urls, tag } = media;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
      {urls.map((url, i) => (
        <Image
          key={url}
          src={url}
          alt="Post media"
          fill
          sizes="(min-width: 640px) 576px, 100vw"
          className={cn(
            "object-cover transition-opacity duration-300",
            i === activeIndex ? "opacity-100" : "opacity-0"
          )}
          priority={i === 0}
        />
      ))}

      {tag && <MediaTag label={tag} />}

      {urls.length > 1 && (
        <>
          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
            {activeIndex + 1}/{urls.length}
          </span>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {urls.map((url, i) => (
              <button
                key={url}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "size-1.5 rounded-full transition-all",
                  i === activeIndex ? "w-4 bg-white" : "bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setActiveIndex((i) => (i - 1 + urls.length) % urls.length)
            }
            className="absolute inset-y-0 left-0 w-1/4"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setActiveIndex((i) => (i + 1) % urls.length)}
            className="absolute inset-y-0 right-0 w-1/4"
          />
        </>
      )}
    </div>
  );
}
