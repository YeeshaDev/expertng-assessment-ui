"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import type { PostMedia as PostMediaType } from "@/lib/types";

function MediaTag({ label }: { label: "For Rent" | "For Sale" }) {
  return (
    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
      <Icon icon="lucide:tag" className="size-3" />
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
            <Icon icon="lucide:pause" className="size-6 fill-current" />
          ) : (
            <Icon icon="lucide:play" className="ml-0.5 size-6 fill-current" />
          )}
        </span>
      </button>
    </div>
  );
}

function ImageCarousel({
  urls,
  tag,
}: {
  urls: string[];
  tag?: "For Rent" | "For Sale";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, urls.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-none flex size-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {urls.map((url, i) => (
          <button
            key={url}
            type="button"
            aria-label={
              i === activeIndex
                ? `Image ${i + 1} of ${urls.length}`
                : `Go to image ${i + 1}`
            }
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const clickedLeftHalf = event.clientX - rect.left < rect.width / 2;
              scrollToIndex(activeIndex + (clickedLeftHalf ? -1 : 1));
            }}
            className="relative h-full w-full shrink-0 snap-center"
          >
            <Image
              src={url}
              alt="Post media"
              fill
              sizes="(min-width: 640px) 576px, 100vw"
              className="object-cover"
              draggable={false}
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      {tag && <MediaTag label={tag} />}

      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
        {activeIndex + 1}/{urls.length}
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {urls.map((url, i) => (
          <button
            key={url}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "pointer-events-auto size-1.5 rounded-full transition-all",
              i === activeIndex ? "w-4 bg-white" : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function PostMedia({ media }: { media: PostMediaType }) {
  if (media.type === "none") return null;

  if (media.type === "video") {
    return <VideoPost media={media} />;
  }

  const { urls, tag } = media;

  if (urls.length > 1) {
    return <ImageCarousel urls={urls} tag={tag} />;
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
      <Image
        src={urls[0]}
        alt="Post media"
        fill
        sizes="(min-width: 640px) 576px, 100vw"
        className="object-cover"
        priority
      />
      {tag && <MediaTag label={tag} />}
    </div>
  );
}
