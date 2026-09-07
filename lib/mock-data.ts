import type { Post, StoryUser } from "./types";

export const currentUser = {
  name: "Aisha Agunbiade",
  avatarUrl: "/images/avatar-1.png",
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
    avatarUrl: "/images/avatar-2.png",
    ringColor: "primary",
    verified: true,
  },
  {
    id: "jordan",
    name: "Jordan",
    avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ringColor: "primary",
  },
  {
    id: "taylor",
    name: "Taylor",
    avatarUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ringColor: "primary",
  },
  {
    id: "jamie",
    name: "Jamie",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ringColor: "primary",
  },
  {
    id: "priya",
    name: "Priya",
    avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ringColor: "primary",
  },
  {
    id: "chidi",
    name: "Chidi",
    avatarUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ringColor: "primary",
  },
  {
    id: "efe",
    name: "Efe",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      avatarUrl: "/images/avatar-5.png",
    },
    timeAgo: "2h",
    location: "36 Jakande Lekki Peninsula 2, Lagos",
    text: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    media: {
      type: "image",
      urls: [
        "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      tag: "For Rent",
    },
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
      avatarUrl: "/images/avatar-1.png",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "Post suggestions on how this works easier",
    media: { type: "none" },
    stats: { likes: 0, comments: 0, views: 1, saves: 0 },
  },
  {
    id: "post-3",
    author: {
      id: "maurice",
      name: "Maurice U",
      role: "Individual",
      category: "General",
      avatarUrl: "/images/avatar-8.png",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "How is everyone holding up with the flooding in Lekki this week? Stay safe out there — and let me know if anyone needs a temporary place to crash 🙏",
    media: { type: "none" },
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
      avatarUrl: "/images/avatar-6.png",
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
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
      ],
      tag: "For Sale",
    },
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
      avatarUrl: "/images/avatar-7.png",
    },
    timeAgo: "Just Now",
    location: "Lekki Phase 1, Lagos",
    text: "New 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month.",
    media: {
      type: "video",
      poster:
       "/images/video-cover.png",
      src: "/videos/interior-tour.mp4",
      duration: "0:20",
      tag: "For Sale",
    },
    likedBySummary: "miracle.h",
    stats: { likes: 1, comments: 0, views: 700, saves: 0 },
  },
];
