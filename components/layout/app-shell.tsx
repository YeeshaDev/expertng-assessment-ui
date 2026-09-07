import type { ReactNode } from "react";
import { AppHeader } from "./app-header";
import { BottomNav } from "./bottom-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-muted">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col bg-background shadow-sm sm:my-0 sm:border-x sm:border-border">
        <AppHeader />
        <main className="flex-1">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
