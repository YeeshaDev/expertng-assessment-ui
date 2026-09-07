"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { BellIcon, FeedIcon, HeartIcon, HomeIcon, UserIcon } from "@/components/icons/nav-icons";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  badge?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "feed", label: "Feed", icon: FeedIcon, badge: "Beta" },
  { id: "wishlist", label: "Wishlist", icon: HeartIcon },
  { id: "notification", label: "Notification", icon: BellIcon },
  { id: "profile", label: "Profile", icon: UserIcon },
];

export function BottomNav() {
  const [active, setActive] = useState<string>("feed");

  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-background backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex items-stretch justify-between px-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon, badge }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              aria-current={isActive ? "page" : undefined}
              className="group flex flex-1 flex-col items-center gap-1 py-2 outline-none"
            >
              <Icon
                className={cn(
                  "size-5 transition-all duration-150",
                  isActive
                    ? "scale-105 text-accent-foreground"
                    : "text-muted-foreground group-hover:text-accent-foreground group-active:scale-95"
                )}
              />
              <span className="flex items-center gap-1">
                <span
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    isActive
                      ? "text-accent-foreground"
                      : "text-muted-foreground group-hover:text-accent-foreground"
                  )}
                >
                  {label}
                </span>
                {badge && (
                  <span className="rounded-full bg-accent px-3 py-0.5 text-sm font-semibold leading-tight text-accent-foreground">
                    {badge}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
