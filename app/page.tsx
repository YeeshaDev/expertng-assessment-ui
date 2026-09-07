import { AppShell } from "@/components/layout/app-shell";
import { StoriesRow } from "@/components/feed/stories-row";
import { FilterBar } from "@/components/feed/filter-bar";
import { ComposerBar } from "@/components/feed/composer-bar";
import { FeedList } from "@/components/feed/feed-list";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <AppShell>
      <StoriesRow />
      <FilterBar />
      <ComposerBar />
      <Separator className="mt-1" />
      <FeedList />
    </AppShell>
  );
}
