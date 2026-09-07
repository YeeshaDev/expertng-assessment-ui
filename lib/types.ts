export type StoryUser = {
  id: string;
  name: string;
  avatarUrl: string;
  ringColor: "muted" | "dark" | "primary";
  isOwn?: boolean;
  verified?: boolean;
};

export type PostAuthor = {
  id: string;
  name: string;
  role: "Developer" | "Individual" | "Agent" | "Broker";
  category: "Property" | "General";
  avatarUrl: string;
};

export type PostMedia =
  | { type: "none" }
  | { type: "image"; urls: string[]; tag?: "For Rent" | "For Sale" }
  | {
      type: "video";
      src: string;
      poster: string;
      duration: string;
      tag?: "For Rent" | "For Sale";
    };

export type PostComment = {
  username: string;
  text: string;
};

export type Post = {
  id: string;
  author: PostAuthor;
  timeAgo: string;
  location: string;
  text: string;
  media: PostMedia;
  likedBySummary?: string;
  stats: {
    likes: number;
    comments: number;
    views: number;
    saves: number;
  };
  topComment?: PostComment;
  totalComments?: number;
};
