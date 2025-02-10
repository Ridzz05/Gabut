export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  content: string;
  image: string;
} 