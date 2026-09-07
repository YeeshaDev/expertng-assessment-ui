# Expert Listing — Frontend Assessment

A pixel-close recreation of the "Expert Listing" property feed, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.

## How to run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # eslint
```

## Technology choices

- **Next.js App Router + TypeScript** — required by the brief; the page is fully static (no data fetching), so it's prerendered at build time.
- **Tailwind CSS v4** — came preconfigured with `create-next-app`; used for all styling via design tokens defined in `app/globals.css` (brand green primary, muted surfaces, etc.) so components stay themeable rather than hard-coding colors.
- **shadcn/ui** — used for a handful of accessible primitives (`Avatar`, `Separator`, `Skeleton`, `Button`) that get fully restyled with Tailwind to match the design. Chosen because it copies un-opinionated component source into the repo rather than shipping a runtime dependency, which keeps the bundle lightweight and every pixel adjustable.
- **lucide-react** — icon set used throughout (header, nav, engagement bar, media badges).
- **No global state library / no backend** — the brief explicitly rules out backend integration; all content lives in `lib/mock-data.ts` typed against `lib/types.ts`. Local UI state (like/save toggles, active bottom-nav tab, carousel index, video play state) is handled with `useState` in the individual client components — there is no cross-component state to justify anything heavier.

## Project structure

```
app/                     route entry (page.tsx, layout.tsx, globals.css)
components/
  layout/                app shell, sticky header, sticky bottom nav
  feed/                  stories row, filter pills, composer, post card
                         and its sub-parts (header, media, engagement,
                         liked-by, comments), end-of-feed marker
  ui/                    shadcn primitives
lib/
  types.ts               Post / Story / Author types
  mock-data.ts            static feed content
  format.ts               number formatting (1.2k, 700, etc.)
  utils.ts                 shadcn's cn() helper
```

Each feed concept (story avatar, post header, post media, engagement bar,
comments preview) is its own small component so the post card composes
cleanly and any single piece (e.g. swapping the video player) can change
without touching the rest.

## Assumptions & trade-offs

- **Source design**: I worked from the supplied mobile screenshot (no edit access to the shared Figma file, so I couldn't pull exact tokens/specs from it). Colors, spacing, and type sizes are matched by eye from the image; if you can grant Figma access I'm happy to true them up against exact values.
- **Responsiveness beyond mobile**: the design only shows a mobile screen. Rather than inventing an unrelated desktop layout, the app shell is centered in a max-width column (bordered card) on tablet/desktop, similar to how Threads/X render their mobile-first feed on larger viewports — this keeps line lengths readable and avoids stretching a phone UI edge-to-edge on a monitor. The header and bottom nav stay sticky at all breakpoints for consistency.
- **Media**: property photos and avatars are static Unsplash/placeholder images (`next/image` with `unoptimized: true`, since this is a static mock-data project with no need for on-demand image optimization). The "video" post uses a static thumbnail with a play/pause toggle rather than a real video file, since no source video was provided — swapping in a real `<video>` element is a drop-in change in `components/feed/post-media.tsx`.
- **Interactions implemented**: like/save toggle with optimistic count changes, image carousel with dot navigation and left/right tap zones, video play/pause toggle, active bottom-nav tab, hover/active states and transitions on every tappable element. Nothing wires up to a backend — all actions are local UI state.
- **Data**: post/story content is illustrative mock data (`lib/mock-data.ts`) mirroring the structure and copy visible in the design, not real listings.

## Deployment

Deployed with Vercel (or deploy your own fork by importing the repo at vercel.com/new — zero config needed, it's a standard Next.js app).
