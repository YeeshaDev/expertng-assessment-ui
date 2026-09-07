import { Icon, type IconProps } from "@iconify/react";

type GlyphProps = Omit<IconProps, "icon">;

export function HeartFilledIcon(props: GlyphProps) {
  return <Icon icon="tabler:heart-filled" {...props} />;
}

export function HeartOutlinedIcon(props: GlyphProps) {
  return <Icon icon="lucide:heart" {...props} />;
}

export function BookmarkFilledIcon(props: GlyphProps) {
  return <Icon icon="tabler:bookmark-filled" {...props} />;
}

export function BookmarkOutlinedIcon(props: GlyphProps) {
  return <Icon icon="lucide:bookmark" {...props} />;
}
