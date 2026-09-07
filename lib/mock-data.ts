import type { Post, StoryUser } from "./types";

export const currentUser = {
  name: "Hero Momoh",
  avatarUrl: "https://i.pravatar.cc/150?img=47",
};

export const stories: StoryUser[] = [
  {
    id: "own",
    name: "Your Story",
    avatarUrl: currentUser.avatarUrl,
    ringColor: "muted",
    isOwn: true,
  },
  {
    id: "ramos",
    name: "RamosRealty",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    ringColor: "muted",
    verified: true,
  },
  {
    id: "jordan",
    name: "Jordan",
    avatarUrl: "https://i.pravatar.cc/150?img=33",
    ringColor: "muted",
  },
  {
    id: "taylor",
    name: "Taylor",
    avatarUrl: "https://i.pravatar.cc/150?img=53",
    ringColor: "dark",
  },
  {
    id: "jamie",
    name: "Jamie",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
    ringColor: "primary",
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    author: {
      id: "boyd",
      name: "Boyd From",
      role: "Developer",
      category: "Property",
      avatarUrl: "https://i.pravatar.cc/150?img=14",
    },
    timeAgo: "2h",
    location: "36 Jakande Lekki Peninsula 2, Lagos",
    text: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    media: {
      type: "image",
      urls: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
      ],
      tag: "For Rent",
    },
    likedByAvatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=8",
    ],
    likedBySummary: "miracle.h and 22 others",
    stats: { likes: 0, comments: 0, views: 1000, saves: 2 },
  },
  {
    id: "post-2",
    author: {
      id: "ima",
      name: "Ima Ntuen",
      role: "Individual",
      category: "General",
      avatarUrl: "https://i.pravatar.cc/150?img=25",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "Post suggestions on how this works easier",
    media: { type: "none" },
    likedByAvatars: [],
    stats: { likes: 0, comments: 0, views: 1, saves: 0 },
  },
  {
    id: "post-3",
    author: {
      id: "maurice",
      name: "Maurice U",
      role: "Individual",
      category: "General",
      avatarUrl: "https://i.pravatar.cc/150?img=51",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "How is everyone holding up with the flooding in Lekki this week? Stay safe out there — and let me know if anyone needs a temporary place to crash 🙏",
    media: { type: "none" },
    likedByAvatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=8",
      "https://i.pravatar.cc/150?img=9",
    ],
    likedBySummary: "miracle.h and 7 others",
    stats: { likes: 8, comments: 8, views: 700, saves: 2 },
    topComment: {
      username: "tunde_b",
      text: "Roads around Admiralty are still bad. Thanks for checking in",
    },
    totalComments: 7,
  },
  {
    id: "post-4",
    author: {
      id: "dan",
      name: "Stranger Dan",
      role: "Agent",
      category: "General",
      avatarUrl: "https://i.pravatar.cc/150?img=60",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    media: {
      type: "image",
      urls: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1000&q=80",
      ],
      tag: "For Sale",
    },
    likedByAvatars: [
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=8",
    ],
    likedBySummary: "miracle.h and 22 others",
    stats: { likes: 23, comments: 3, views: 1200, saves: 2 },
    topComment: {
      username: "miracle.h",
      text: "Is the rent negotiable? Interested for my client.",
    },
    totalComments: 3,
  },
  {
    id: "post-5",
    author: {
      id: "felix",
      name: "Felix Okon",
      role: "Broker",
      category: "Property",
      avatarUrl: "https://i.pravatar.cc/150?img=15",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "New 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month.",
    media: {
      type: "video",
      poster:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
      src: "/videos/interior-tour.mp4",
      duration: "0:20",
      tag: "For Sale",
    },
    likedByAvatars: ["https://i.pravatar.cc/150?img=5"],
    likedBySummary: "miracle.h",
    stats: { likes: 1, comments: 0, views: 700, saves: 0 },
  },
];
