"use client";

import { useState } from "react";
import { Home, Rss, Heart, Bell, User, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "feed", label: "Feed", icon: Rss, badge: "Beta" },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "notification", label: "Notification", icon: Bell },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const [active, setActive] = useState<string>("feed");

  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
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
                    ? "scale-105 fill-primary/15 text-primary"
                    : "text-muted-foreground group-hover:text-foreground group-active:scale-95"
                )}
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span className="flex items-center gap-1">
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {label}
                </span>
                {badge && (
                  <span className="rounded-full bg-accent px-1.5 py-[1px] text-[9px] font-semibold leading-tight text-accent-foreground">
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
