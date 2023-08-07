export interface AuthorProfileInterface {
  Name: string;
  DescriptionOne: string;
  DescriptionTwo: string;
  Email: string;
  Linkedin: string;
  Linktree: string;
  ProfilePicture: string;
  Designation: string;
  Instagram: string;
  Twitter: string;
}

export interface AuthorStoriesInterface {
  MainStory: MainStories[];
  SideStory: SideStories[];
}

interface MainStories {
  ThumbTitle: string;
  ThumbImageOne: string;
  ThumbImageOneDescription: string;
  Tag: string;
  Slug: string;
  CreatedAt: string;
  Category: { Category: string };
  Author: { Name: string; Slug: string };
  Reads: number;
}

interface SideStories {
  Author: { Name: string; Slug: string };
  Category: { Category: string };
  ThumbTitle: string;
  Tag: string;
  ThumbImage: string;
  ThumbImageDescription: string;
  Slug: string;
  CreatedAt: string;
  Reads: number;
}
